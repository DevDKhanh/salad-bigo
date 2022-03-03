import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import axiosClient from '../../api';
import { API_URL } from '../../constants/config';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const body = req.body;
    axiosClient
        .post<any>(`${API_URL}/Accounts/logout`, body)
        .then((data: any) => {
            if (data.error.code === 0) {
                res.setHeader('Set-Cookie', [
                    serialize('access-token', '', {
                        maxAge: -1,
                        path: '/',
                    }),
                    serialize('data-user', '', {
                        maxAge: -1,
                        path: '/',
                    }),
                ]);
            }
            return res.status(200).json(data);
        })
        .catch((err) => {
            return res.status(500);
        });
}
