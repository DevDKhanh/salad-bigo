import React from 'react';
import ItemHistory from '../../../components/pages/wheel/ItemHistory';
import NavHistory from '../../../components/pages/wheel/NavHistory';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import NavHeader from '../../../components/widgets/NavHeader';
import style from './History.module.scss';

function History() {
    return (
        <RequiredAuth>
            <div className={style.container}>
                <NavHeader href="/" title="Lịch sử vòng quay" />
                <NavHistory />
                <div className="page-main">
                    <ul className={style.list}>
                        <ItemHistory />
                        <ItemHistory />
                        <ItemHistory />
                        <ItemHistory />
                        <ItemHistory />
                        <ItemHistory />
                        <ItemHistory />
                        <ItemHistory />
                        <ItemHistory />
                    </ul>
                </div>
            </div>
        </RequiredAuth>
    );
}

export default History;
