import React from 'react';
import Image from 'next/image';
import { RiArrowRightSFill } from 'react-icons/ri';
import icons from '../../../../constants/images/icon';
import style from './ItemHistoryWallet.module.scss';
import Link from 'next/link';

function ItemHistoryWallet() {
    return (
        <Link href={`/wallet/history-detail`}>
            <a className={style.main}>
                <div className={style.title}>
                    <span className={style.status}>Hoàn thành</span>
                    <span className={style.icon}>
                        <RiArrowRightSFill />
                    </span>
                </div>
                <div className={style.bet}>
                    <div className={style.item}>
                        <div>Số tiền nạp:</div>
                        <div className={style.coin}>100.000</div>
                    </div>
                    <div className={style.item}>
                        <div>Đã đặt quy đổi:</div>
                        <div className={style.coin}>
                            <span className={style.iconIcon}>
                                <Image
                                    src={icons.coin}
                                    alt={'coin'}
                                    layout="fill"
                                />
                            </span>
                            1000
                        </div>
                    </div>
                </div>
                <time>20:00/ 28/02/2022</time>
            </a>
        </Link>
    );
}

export default ItemHistoryWallet;
