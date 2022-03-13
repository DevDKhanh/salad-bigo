import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../redux/reducers';
import icons from '../../../../constants/images/icon';
import style from './InfoWallet.module.scss';

function InfoWallet() {
    const { coin } = useSelector((state: RootState) => state.user);
    return (
        <div className={style.container}>
            <div className="page-main">
                <div className={style.main}>
                    <div className={style.coinGroup}>
                        <div className={style.title}>Số dư coin</div>
                        <div className={style.coin}>
                            <span className={style.iconIcon}>
                                <Image
                                    src={icons.coin}
                                    alt={'coin'}
                                    layout="fill"
                                />
                            </span>
                            {coin}
                        </div>
                    </div>
                    <div className={style.groupBtn}>
                        <Link href="/wallet/deposit">
                            <a className={style.btn}>Nạp thêm</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InfoWallet;
