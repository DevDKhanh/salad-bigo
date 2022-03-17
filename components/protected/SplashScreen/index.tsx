import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import axiosClient from '../../../api';
import { getItemStorage } from '../../../common/utils/localStorage';
import { login } from '../../../redux/actions/auth';
import { toggleLoading } from '../../../redux/actions/interface';
import { setCoin, setUserData } from '../../../redux/actions/user';
import { setList, setListBet } from '../../../redux/actions/wheel';
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
        /********** get cookie and update state global **********/
        function checkUserLogin() {
            (async () => {
                try {
                    const { origin } = window.location;
                    const res: any = await axiosClient.get<any>(
                        `${origin}/api/check-login`
                    );

                    /*---------- current user logged, update state ----------*/
                    if (res.code === 1) {
                        const token = res.data.token;
                        const userData = res.data.userData;
                        const listItemWheel = res.data.listItemWheel;
                        dispatch(login({ token }));
                        dispatch(setCoin(userData.coin));
                        dispatch(setUserData(userData));
                        dispatch(setList(listItemWheel));
                    }

                    dispatch(toggleLoading()); //==> hidden splash screen
                } catch (err) {
                    dispatch(toggleLoading()); //==> hidden splash screen
                }
            })();
        }
        checkUserLogin();
    }, [dispatch]);

    if (!isLoading) {
        return <>{children}</>;
    }

    return <div className="loading-page"></div>;
}

export default SplashScreen;
