import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import axios from 'axios';

import RequiredAuth from '../../../components/protected/RequiredAuth';
import NavHeader from '../../../components/widgets/NavHeader';
import style from '../Wallet.module.scss';

function Detail() {
    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState<any>(null);

    useEffect(() => {
        (async () => {
            try {
                const res: any = await axios.post<any>(
                    '/api/history-deposit-detail',
                    {
                        id,
                    }
                );
                setData(res.data.result.payload);
            } catch (err) {}
        })();
    }, [id]);
    return (
        <RequiredAuth>
            <div className={style.container}>
                <NavHeader href="/wallet" title="Nạp tiền" />
                {data && (
                    <Fragment>
                        <div
                            className={clsx([
                                style.status,
                                style[`status-${data?.status}`],
                            ])}
                        >
                            <span>Trạng thái</span>
                            <span>{data?.status_name}</span>
                        </div>
                        <div className={style.content}>
                            <span>Số tiền nạp</span>
                            <b>{data?.amount * 1000} VND</b>
                        </div>
                        <div className={style.content}>
                            <span>Mã nạp tiền</span>
                            <b>{data?.wallet_code}</b>
                        </div>
                        <div className={style.content}>
                            <span>Số tài khoản</span>
                            <b>{data?.account_number}</b>
                        </div>
                        <div className={style.content}>
                            <span>Ngân hàng</span>
                            <b>{data?.bank_name}</b>
                        </div>
                        <div className={style.content}>
                            <span>Chủ tài khoản</span>
                            <b>{data?.account_name}</b>
                        </div>
                    </Fragment>
                )}
            </div>
        </RequiredAuth>
    );
}

export default Detail;
