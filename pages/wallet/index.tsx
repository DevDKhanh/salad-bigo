import axios from 'axios';
import Head from 'next/head';
import React, { useEffect, useRef, useState } from 'react';
import InfoWallet from '../../components/pages/wallet/InfoWallet';
import ItemHistoryWallet from '../../components/pages/wallet/ItemHistoryWallet';
import NavHistoryWallet from '../../components/pages/wallet/NavHistoryWallet';
import RequiredAuth from '../../components/protected/RequiredAuth';
import NavHeader from '../../components/widgets/NavHeader';
import style from './Wallet.module.scss';

function Wallet() {
    const pageSize: number = 14;
    const mainRef: any = useRef();

    const [list, setList] = useState<any>([]);
    const [status, setStatus] = useState<any>('');
    const [page, setPage] = useState<number>(1);

    const [disabledLoad, setDisabledLoad] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => () => {
            setList([]);
            setDisabledLoad(false);
            setLoading(true);
            setPage(1);
        },
        [status]
    );

    useEffect(() => {
        (async () => {
            try {
                const res: any = await axios.post<any>('/api/history-deposit', {
                    status,
                    page,
                    pageSize,
                });
                if (res.data.result.payload.list_wallet) {
                    setList((prev: any) => [
                        ...prev,
                        ...res.data.result.payload.list_wallet,
                    ]);
                    setLoading(false);
                    if (
                        pageSize * page >=
                        res?.data?.result?.payload?.total_item
                    ) {
                        console.log(res?.data?.result?.payload?.list_wallet);
                        console.log('first');
                        /********** max collection can't load page **********/
                        setDisabledLoad(true);
                    }
                }
            } catch (err) {}
        })();
    }, [status, page]);

    useEffect(() => {
        const handleScroll = () => {
            const screenHeight = window.innerHeight;
            const scrollTop = window.scrollY;
            const listHeight = mainRef.current?.clientHeight;

            /********** load data if scroll down **********/
            if (screenHeight + scrollTop > listHeight - 20) {
                if (!loading && !disabledLoad) {
                    nextPage();
                    setLoading(true);
                }
            }
        };

        /********** to next page **********/
        const nextPage = () => {
            setPage((prev) => prev + 1);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [disabledLoad, loading]);

    return (
        <RequiredAuth>
            <Head>
                <title>Wallet</title>
            </Head>
            <div className={style.container}>
                <NavHeader href={'/'} title="Xu của tôi" />
                <InfoWallet />
                <NavHistoryWallet status={status} onSetStatus={setStatus} />
                <div className="page-main" ref={mainRef}>
                    {list?.map?.length > 0 ? (
                        list.map((item: any) => (
                            <ItemHistoryWallet key={item.id} data={item} />
                        ))
                    ) : (
                        <h3>Không có lịch sử</h3>
                    )}
                    <br />
                </div>
            </div>
        </RequiredAuth>
    );
}

export default Wallet;
