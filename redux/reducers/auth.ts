import * as AUTH from '../type/auth';

interface data {
    type: string;
    payload: any;
}

const initialState = {
    token: null,
    isLogged: false,
    isRemember: false,
    dataSavePass: {},
};

const authReducer = (state = initialState, { type, payload }: data) => {
    switch (type) {
        case AUTH.LOGIN:
            return {
                ...state,
                isLogged: true,
                token: payload.token,
            };
        case AUTH.LOGOUT:
            return { ...state, isLogged: false, data: {}, token: null };
        case AUTH.TOGGLE_REMEMBER_PASSWORD:
            return { ...state, isRemember: payload };
        case AUTH.SAVE_PASSWORD:
            return { ...state, dataSavePass: payload };
        default:
            return state;
    }
};

export default authReducer;
