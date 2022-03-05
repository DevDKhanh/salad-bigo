import * as USER from '../type/user';

export const setCurrentBet = (coin: number) => {
    return { type: USER.SET_CURRENT_BET, payload: coin };
};
export const setCoin = (coin: number) => {
    return { type: USER.SET_COIN, payload: coin };
};
export const setUserData = (data: any) => {
    return { type: USER.SET_USER_DATA, payload: data };
};
