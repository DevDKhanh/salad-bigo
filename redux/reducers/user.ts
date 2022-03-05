import * as USER from '../type/user';

const initialState = {
    coin: 0,
    currentBet: 100,
    userData: {},
};

const userReducer = (
    state = initialState,
    { type, payload }: { type: string; payload: any }
) => {
    switch (type) {
        case USER.SET_CURRENT_BET:
            return { ...state, currentBet: payload };
        case USER.SET_COIN:
            return { ...state, coin: payload };
        case USER.SET_USER_DATA:
            return { ...state, userData: payload };
        default:
            return state;
    }
};

export default userReducer;
