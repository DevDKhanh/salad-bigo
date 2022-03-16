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
        const { date } = req.body;
        if (cookies['access-token']) {
            const listBet: any = await wheelAPI.listBet(
                date,
                cookies['access-token']
            );
            return res.status(200).json({
                listBet,
            });
        } else {
            return res.status(200).json({ code: 0, message: 'Not login' });
        }
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
