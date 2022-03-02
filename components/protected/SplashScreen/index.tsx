import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axiosClient from '../../../api';
import { getItemStorage } from '../../../common/utils/localStorage';
import {
    login,
    savePassword,
    toggleRememberPassword,
} from '../../../redux/actions/auth';
import { toggleLoading } from '../../../redux/actions/interface';
import {
    updateCoin,
    updateInfoUser,
    updateInfoUserTransaction,
} from '../../../redux/actions/user';
import { RootState } from '../../../redux/reducers';

/*===========> INTERFACE <==========*/
interface props {
    name?: string;
    children: React.ReactNode;
}

/*===========> MAIN COMPONENT <==========*/
function SplashScreen({ children }: props) {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state: RootState) => state.interface);

    useEffect(() => {
        checkUserLogin();
        checkRememberPassword();
    }, []);

    function checkRememberPassword() {
        const passStr = getItemStorage('passStr');
        const userStr = getItemStorage('userStr');
        if (passStr && userStr) {
            dispatch(savePassword({ passStr, userStr }));
            dispatch(toggleRememberPassword(true));
        }
    }

    /********** get cookie and update state global **********/
    function checkUserLogin() {
        (async () => {
            try {
                const { origin } = window.location;
                const res: any = await axiosClient.get<any>(
                    `${origin}/api/check-login`
                );

                const userData = JSON.parse(res.data.userData);

                /*---------- current user logged, update state ----------*/
                if (res.code === 1) {
                    const token = res.data.token;
                    dispatch(login({ token }));
                    dispatch(updateInfoUser(userData));
                    dispatch(updateCoin(res.data.userTransaction.gameCoin));
                    dispatch(
                        updateInfoUserTransaction(res.data.userTransaction)
                    );
                }

                dispatch(toggleLoading()); //==> hidden splash screen
            } catch (err) {
                dispatch(toggleLoading()); //==> hidden splash screen
            }
        })();
    }

    if (!isLoading) {
        return <>{children}</>;
    }

    return <div className="loading-page"></div>;
}

export default SplashScreen;
