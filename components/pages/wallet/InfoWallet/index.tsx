import React from 'react';
import Image from 'next/image';
import style from './InfoWallet.module.scss';
import icons from '../../../../constants/images/icon';
import Link from 'next/link';

function InfoWallet() {
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
                            240.000
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
