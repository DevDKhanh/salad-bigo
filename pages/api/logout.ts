import type { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';
import authAPI from '../../api/auth';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const body = req.body;
    const resLogout: any = await authAPI.logout(body.token);
    if (resLogout.code === 0) {
        res.setHeader('Set-Cookie', [
            serialize('access-token', '', {
                maxAge: -1,
                path: '/',
            }),
        ]);
    }
    return res.status(200).json(resLogout);
}
