import clsx from 'clsx';
import React from 'react';
import style from './NavHistoryWallet.module.scss';

function NavHistoryWallet({
    status,
    onSetStatus,
}: {
    status: string;
    onSetStatus: (string: string) => void;
}) {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <div className="page-main">Lịch sử nạp</div>
            </div>
            <div className="page-main">
                <div className={style.main}>
                    <div
                        className={clsx([
                            style.item,
                            { [style.active]: status === '' },
                        ])}
                        onClick={() => onSetStatus('')}
                    >
                        Tất cả
                    </div>
                    <div
                        className={clsx([
                            style.item,
                            { [style.active]: status === '02' },
                        ])}
                        onClick={() => onSetStatus('02')}
                    >
                        Hoàn thành
                    </div>
                    <div
                        className={clsx([
                            style.item,
                            { [style.active]: status === '01' },
                        ])}
                        onClick={() => onSetStatus('01')}
                    >
                        Đang chờ
                    </div>
                    <div
                        className={clsx([
                            style.item,
                            { [style.active]: status === '03' },
                        ])}
                        onClick={() => onSetStatus('03')}
                    >
                        Đã huỷ
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavHistoryWallet;
