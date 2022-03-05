import axiosClient from '.';

const routeName = '/user';

const wheelAPI = {
    listItem: (tokenAxios?: any) => {
        const url = `${routeName}/list-rotation`;
        return axiosClient.get(url, {
            cancelToken: tokenAxios,
        });
    },
};

export default wheelAPI;
