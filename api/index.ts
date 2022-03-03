import axios from 'axios';
import queryString from 'query-string';
import { API_URL } from '../constants/config';

const axiosClient = axios.create({
    headers: {
        'content-type': 'application/json',
    },
    baseURL: API_URL,
    paramsSerializer: (params: any) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
    return config;
});

axiosClient.interceptors.response.use(
    (response: any) => {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    (error: any) => {
        if (error.response && error.response.data) {
            throw error.response.data;
        }

        if (!axios.isCancel(error)) throw error;
    }
);

export default axiosClient;
