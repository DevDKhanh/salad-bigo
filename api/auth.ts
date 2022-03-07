import axiosClient from '.';

const routeName = '/user';

const authAPI = {
    changePass: (data: any, token: string, tokenAxios?: any) => {
        const url = `${routeName}/change-password`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
            headers: {
                authorization: 'Bearer ' + token,
            },
        });
    },
    signup: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/register-user`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    logout: (token: string, tokenAxios?: any) => {
        const url = `${routeName}/logout`;
        return axiosClient.post(
            url,
            {},
            {
                cancelToken: tokenAxios,
                headers: {
                    authorization: 'Bearer ' + token,
                },
            }
        );
    },
    login: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/login`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    ping: (token: string, tokenAxios?: any) => {
        const url = `${routeName}/profile`;
        return axiosClient.get(url, {
            cancelToken: tokenAxios,
            headers: {
                authorization: 'Bearer ' + token,
            },
        });
    },
};

export default authAPI;
