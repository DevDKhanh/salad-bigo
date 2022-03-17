import React, { useEffect, useState } from 'react';
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
    const [list, setList] = useState<Array<item>>([]);
    useEffect(() => {
        (async () => {
            try {
                const res: any = await axiosClient.get<any>(
                    `${origin}/api/history`
                );
                setList(res.result.payload);
            } catch (e) {}
        })();
    }, []);
    return (
        <RequiredAuth>
            <div className={style.container}>
                <NavHeader href="/" title="Lịch sử vòng quay" />
                <div className="page-main">
                    <ul className={style.list}>
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
