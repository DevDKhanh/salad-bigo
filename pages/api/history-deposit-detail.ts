import type { NextApiRequest, NextApiResponse } from 'next';
import cookie, { serialize } from 'cookie';
import authAPI from '../../api/auth';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const { id } = req.body;
        const cookies = cookie.parse(
            req ? req.headers.cookie || '' : document.cookie
        );
        const result = await authAPI.historyDepositDetail(
            id,
            cookies['access-token']
        );
        return res.status(200).json({ code: 1, result });
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
