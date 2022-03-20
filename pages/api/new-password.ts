import type { NextApiRequest, NextApiResponse } from 'next';
import authAPI from '../../api/auth';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const data = req.body;
        const result: any = await authAPI.newPassword(data);
        if (result.code === 0) {
            return res.status(200).json({ code: 1, result });
        } else {
            return res.status(200).json({ code: 0, result });
        }
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
