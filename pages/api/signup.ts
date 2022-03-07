import type { NextApiRequest, NextApiResponse } from 'next';
import authAPI from '../../api/auth';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    try {
        const body = req.body;
        authAPI
            .signup(body)
            .then((data: any) => {
                if (data.code === 0) {
                    console.log(data);
                }
                return res.status(200).json({ ...data });
            })
            .catch((err) => {
                return res.status(500);
            });
    } catch (e) {
        return res.status(200).json({ code: 0, message: 'Not login' });
    }
}
