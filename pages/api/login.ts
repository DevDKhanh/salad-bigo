import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import authAPI from '../../api/auth';
import wheelAPI from '../../api/wheel';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const body = req.body;
        const listItemWheel: any = await wheelAPI.listItem();
        const data: any = await authAPI.login(body);
        if (data.code === 0) {
            res.setHeader('Set-Cookie', [
                serialize('access-token', data.payload.token, {
                    path: '/',
                    httpOnly: true,
                }),
            ]);
        }
        return res.status(200).json({ ...data, listItemWheel: listItemWheel });
    } catch (e) {
        return res.status(500);
    }
}
