import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RiArrowRightSLine } from 'react-icons/ri';

import { RootState } from '../../../../redux/reducers';
import icons from '../../../../constants/images/icon';
import style from './InfoCoin.module.scss';

function InfoCoin() {
    const { userData } = useSelector((state: RootState) => state.user);
    return (
        <div className={style.main}>
            <div className={style.coin}>
                <p>Số dư coin:</p>
                <div className={style.coinNumber}>
                    <span className={style.iconIcon}>
                        <Image src={icons.coin} alt={'coin'} layout="fill" />
                    </span>
                    <span>{userData.coin}</span>
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
