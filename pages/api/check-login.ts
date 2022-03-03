import type { NextApiRequest, NextApiResponse } from 'next';
import cookie, { serialize } from 'cookie';
import axiosClient from '../../api';
import { API_URL } from '../../constants/config';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const cookies = cookie.parse(
            req ? req.headers.cookie || '' : document.cookie
        );
        if (cookies['access-token']) {
            const tokenStr = cookies['access-token'];

            return res.status(200).json({
                code: 1,
                message: 'Check login success!',
                data: {
                    token: tokenStr,
                    userData: cookies['data-user'],
                },
            });
        } else {
            return res.status(200).json({ code: 0, message: 'Not login' });
        }
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
