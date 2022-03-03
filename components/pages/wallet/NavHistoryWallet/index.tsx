import clsx from 'clsx';
import React from 'react';
import style from './NavHistoryWallet.module.scss';

function NavHistoryWallet() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <div className="page-main">Lịch sử nạp</div>
            </div>
            <div className="page-main">
                <div className={style.main}>
                    <div
                        className={clsx([style.item, { [style.active]: true }])}
                    >
                        Tất cả
                    </div>
                    <div
                        className={clsx([
                            style.item,
                            { [style.active]: false },
                        ])}
                    >
                        Hoàn thành
                    </div>
                    <div
                        className={clsx([
                            style.item,
                            { [style.active]: false },
                        ])}
                    >
                        Đang chờ
                    </div>
                    <div
                        className={clsx([
                            style.item,
                            { [style.active]: false },
                        ])}
                    >
                        Đã huỷ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavHistoryWallet;
