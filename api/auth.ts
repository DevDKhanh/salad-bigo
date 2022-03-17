import axiosClient from '.';

const routeName = '/user';

const authAPI = {
    historyDepositDetail: (id: string, token: string, tokenAxios?: any) => {
        const url = `${routeName}/detail-wallet?id=${id}`;
        return axiosClient.get(url, {
            cancelToken: tokenAxios,
            headers: {
                authorization: 'Bearer ' + token,
            },
        });
    },
    historyDeposit: (
        status: string,
        page: number,
        pageSize: number,
        token: string,
        tokenAxios?: any
    ) => {
        const url = `${routeName}/list-wallet?status=${status}&pageSize=${pageSize}&currentPage=${page}`;
        return axiosClient.get(url, {
            cancelToken: tokenAxios,
            headers: {
                authorization: 'Bearer ' + token,
            },
        });
    },
    deposit: (data: any, token: string, tokenAxios?: any) => {
        const url = `${routeName}/recharge-wallet`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
            headers: {
                authorization: 'Bearer ' + token,
            },
        });
    },
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
    updateInfo: (data: any, token: string, tokenAxios?: any) => {
        const url = `${routeName}/update-info-user`;
        return axiosClient.post(url, data, {
            cancelToken: tokenAxios,
            headers: {
                authorization: 'Bearer ' + token,
            },
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
