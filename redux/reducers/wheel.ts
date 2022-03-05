import * as WHEEL from '../type/wheel';

const initialState = {
    listWheel: [],
};

const wheelReducer = (
    state = initialState,
    { type, payload }: { type: string; payload: any }
) => {
    switch (type) {
        case WHEEL.SET_LIST_WHEEL:
            return { ...state, listWheel: payload };
        default:
            return state;
    }
};

export default wheelReducer;
