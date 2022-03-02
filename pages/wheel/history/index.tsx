import React from 'react';
import ItemHistory from '../../../components/pages/wheel/ItemHistory';
import NavHistory from '../../../components/pages/wheel/NavHistory';
import NavHeader from '../../../components/widgets/NavHeader';
import style from './History.module.scss';

function History() {
    return (
        <div className={style.container}>
            <NavHeader href="/wheel" title="Lịch sử vòng quay" />
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
    );
}

export default History;
