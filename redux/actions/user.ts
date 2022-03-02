import * as USER from '../type/user';

export const setCurrentBet = (coin: number) => {
    return { type: USER.SET_CURRENT_BET, payload: coin };
};
