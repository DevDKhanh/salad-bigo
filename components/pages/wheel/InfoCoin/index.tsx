import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';

import icons from '../../../../constants/images/icon';
import style from './InfoCoin.module.scss';

function InfoCoin() {
    return (
        <div className={style.main}>
            <div className={style.coin}>
                <p>Số dư coin:</p>
                <div className={style.coinNumber}>
                    <span className={style.iconIcon}>
                        <Image src={icons.coin} alt={'coin'} layout="fill" />
                    </span>
                    <span>1000</span>
                </div>
            </div>
            <div className={style.groupBtn}>
                <Link href="/wallet/deposit">
                    <a className={style.btn}>
                        Nạp tiền
                        <span className={style.icon}>
                            <RiArrowRightSLine />
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default InfoCoin;
