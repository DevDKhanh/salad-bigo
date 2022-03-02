import * as INTERFACE from '../type/interface';

/*---------- ACTIONS ----------*/
export const toggleLoading = () => ({ type: INTERFACE.TOGGLE_LOADING });

export const updateTitle = (title: any) => {
    return { type: INTERFACE.UPDATE_TITLE, payload: title };
};

export const updateShowNotifi = (status: boolean) => {
    return { type: INTERFACE.UPDATE_SHOW_NOTIFI, payload: status };
};

export const updateBtnBack = (href: any) => {
    return { type: INTERFACE.UPDATE_BTN_BACK, payload: href };
};

export const updateShowHeader = (status: boolean) => {
    return { type: INTERFACE.UPDATE_SHOW_HEADER, payload: status };
};

export const updateShowNavigation = (status: boolean) => {
    return { type: INTERFACE.UPDATE_SHOW_NAVIGATION, payload: status };
};

export const updateShowBackground = (status: boolean) => {
    return { type: INTERFACE.UPDATE_SHOW_BACKGROUND, payload: status };
};

export const updateShowHeaderTime = (status: boolean) => {
    return { type: INTERFACE.UPDATE_SHOW_HEADER_TIME, payload: status };
};

export const updateShowChangeLang = (status: boolean) => {
    return { type: INTERFACE.UPDATE_SHOW_CHANGE_LANG, payload: status };
};
