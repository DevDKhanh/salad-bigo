import {
    deleteItemStorage,
    setItemStorage,
} from '../../common/utils/localStorage';
import * as AUTH from '../type/auth';

/*---------- INTERFACE ----------*/
interface valueData {
    userStr?: string;
    passStr?: string;
}

/*---------- ACTIONS ----------*/
export const login = (data: any) => ({ type: AUTH.LOGIN, payload: data });

export const logout = () => ({ type: AUTH.LOGOUT });

export const toggleRememberPassword = (status: boolean) => {
    if (status) {
        return {
            type: AUTH.TOGGLE_REMEMBER_PASSWORD,
            payload: status,
        };
    } else {
        deleteItemStorage('userStr');
        deleteItemStorage('passStr');
        return {
            type: AUTH.TOGGLE_REMEMBER_PASSWORD,
            payload: status,
        };
    }
};

export const savePassword = (data: valueData) => {
    setItemStorage('userStr', data.userStr);
    setItemStorage('passStr', data.passStr);
    return {
        type: AUTH.SAVE_PASSWORD,
        payload: data,
    };
};
