import clsx from 'clsx';
import React from 'react';
import style from './NavHistory.module.scss';

function NavHistory() {
    return (
        <div className="page-main">
            <div className={style.main}>
                <div className={clsx([style.item, { [style.active]: true }])}>
                    Tất cả
                </div>
                <div className={clsx([style.item, { [style.active]: false }])}>
                    Đã quay
                </div>
                <div className={clsx([style.item, { [style.active]: false }])}>
                    Chiến thắng
                </div>
            </div>
        </div>
    );
}

export default NavHistory;
