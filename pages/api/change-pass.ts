import type { NextApiRequest, NextApiResponse } from 'next';
import cookie, { serialize } from 'cookie';
import authAPI from '../../api/auth';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const body = req.body;
        const cookies = cookie.parse(
            req ? req.headers.cookie || '' : document.cookie
        );
        const result: any = await authAPI.changePass(
            body,
            cookies['access-token']
        );
        if (result.code === 0) {
            return res.status(200).json({ code: 1, result });
        } else {
            return res.status(200).json({ code: 0, result });
        }
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
