import * as INTERFACE from '../type/interface';

interface data {
    type: string;
    payload: any;
}

const initialState = {
    isLoading: true,
    title: null,
    showNotifi: true,
    showHeader: true,
    showNavigation: true,
    showHeaderTime: true,
    showbackground: false,
    showChangeLang: false,
    buttonBack: null,
};

const interFaceReducer = (state = initialState, { type, payload }: data) => {
    switch (type) {
        case INTERFACE.TOGGLE_LOADING:
            return { ...state, isLoading: false };
        case INTERFACE.UPDATE_TITLE:
            return { ...state, title: payload };
        case INTERFACE.UPDATE_SHOW_NOTIFI:
            return { ...state, showNotifi: payload };
        case INTERFACE.UPDATE_BTN_BACK:
            return { ...state, buttonBack: payload };
        case INTERFACE.UPDATE_SHOW_HEADER:
            return { ...state, showHeader: payload };
        case INTERFACE.UPDATE_SHOW_NAVIGATION:
            return { ...state, showNavigation: payload };
        case INTERFACE.UPDATE_SHOW_BACKGROUND:
            return { ...state, showbackground: payload };
        case INTERFACE.UPDATE_SHOW_HEADER_TIME:
            return { ...state, showHeaderTime: payload };
        case INTERFACE.UPDATE_SHOW_CHANGE_LANG:
            return { ...state, showChangeLang: payload };
        default:
            return state;
    }
};

export default interFaceReducer;
