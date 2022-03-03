import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import axiosClient from '../../api';
import { API_URL } from '../../constants/config';
import authAPI from '../../api/auth';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const body = req.body;
    authAPI
        .login(body)
        .then((data: any) => {
            if (data.code === 0) {
                res.setHeader('Set-Cookie', [
                    serialize('access-token', data.payload.token, {
                        path: '/',
                        httpOnly: true,
                    }),
                    serialize('data-user', JSON.stringify(data.payload), {
                        path: '/',
                        httpOnly: true,
                    }),
                ]);
            }
            return res.status(200).json(data);
        })
        .catch((err) => {
            return res.status(500);
        });
}
