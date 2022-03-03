import axiosClient from '.';

const routeName = '/user';

const authAPI = {
    signup: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/register`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    login: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/login`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    forgotPassword: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/forgot-password`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    resetPassword: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/reset-password`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    changePass: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/change-password`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    sendOtp: (data: any, tokenAxios?: any) => {
        const url = `${routeName}/send-otp`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
    ping: (data: { tokenStr: string }, tokenAxios?: any) => {
        const url = `${routeName}/ping`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
        });
    },
};

export default authAPI;
