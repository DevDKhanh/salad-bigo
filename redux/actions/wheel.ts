import * as WHEEL from '../type/wheel';

export const setList = (data: any) => {
    return { type: WHEEL.SET_LIST_WHEEL, payload: data };
};
