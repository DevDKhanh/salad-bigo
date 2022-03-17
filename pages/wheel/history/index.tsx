import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import axiosClient from '../../../api';
import ItemHistory from '../../../components/pages/wheel/ItemHistory';
import NavHistory from '../../../components/pages/wheel/NavHistory';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import NavHeader from '../../../components/widgets/NavHeader';
import style from './History.module.scss';
/*===========> INTERFACE <==========*/
interface item {
    rotation_code: string;
    user_code: string;
    rotation_time: number;
    image: string;
    coinBet: number;
    coinWin: number;
}

/*===========> MAIN COMPONENT <==========*/
function History() {
    const pageSize: number = 14;
    const mainRef: any = useRef();

    const [list, setList] = useState<Array<item>>([]);
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
        []
    );

    useEffect(() => {
        (async () => {
            try {
                const res: any = await axios.post<any>(`/api/history`, {
                    page,
                    pageSize,
                });
                console.log(res);
                if (res.data.result.payload.list_history) {
                    setList((prev: any) => [
                        ...prev,
                        ...res.data.result.payload.list_history,
                    ]);
                    setLoading(false);
                    if (
                        pageSize * page >=
                        res?.data?.result?.payload?.total_item
                    ) {
                        console.log(res?.data?.result?.payload?.list_history);
                        console.log('first');
                        /********** max collection can't load page **********/
                        setDisabledLoad(true);
                    }
                }
            } catch (e) {}
        })();
    }, [page]);

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
            <div className={style.container}>
                <NavHeader href="/" title="Lịch sử vòng quay" />
                <div className="page-main">
                    <ul className={style.list} ref={mainRef}>
                        {list.map((item, index) => (
                            <ItemHistory
                                key={index + item.rotation_time}
                                data={item}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </RequiredAuth>
    );
}

export default History;
