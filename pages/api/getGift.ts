import type { NextApiRequest, NextApiResponse } from 'next';
import cookie, { serialize } from 'cookie';
import axiosClient from '../../api';
import { API_URL } from '../../constants/config';
import authAPI from '../../api/auth';
import wheelAPI from '../../api/wheel';

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
            const ping: any = await authAPI.ping(tokenStr);
            const listItemWheel: any = await wheelAPI.listItem();
            if (ping?.code === 0 && listItemWheel?.code === 0) {
                console.log(tokenStr);
                return res.status(200).json({
                    code: 1,
                    message: 'Check login success!',
                    data: {
                        token: tokenStr,
                        userData: ping.payload,
                        listItemWheel: listItemWheel.payload,
                    },
                });
            } else {
                return res
                    .status(200)
                    .json({ code: 0, message: 'Token invalid!' });
            }
        } else {
            return res.status(200).json({ code: 0, message: 'Not login' });
        }
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
