import * as USER from '../type/user';

const initialState = {
    coin: 0,
    currentBet: 100,
};

const userReducer = (
    state = initialState,
    { type, payload }: { type: string; payload: any }
) => {
    switch (type) {
        case USER.SET_CURRENT_BET:
            return { ...state, currentBet: payload };
        default:
            return state;
    }
};

export default userReducer;
