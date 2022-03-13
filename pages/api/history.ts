import type { NextApiRequest, NextApiResponse } from 'next';
import cookie, { serialize } from 'cookie';
import wheelAPI from '../../api/wheel';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const cookies = cookie.parse(
            req ? req.headers.cookie || '' : document.cookie
        );
        const result = await wheelAPI.history(cookies['access-token']);
        return res.status(200).json({ code: 1, result });
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
