import React from 'react';
import Image from 'next/image';
import icons from '../../../../constants/images/icon';
import style from './NavBottom.module.scss';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';
import backgrounds from '../../../../constants/images/background';

function NavBottom() {
    return (
        <div className={style.container}>
            <div className={style.bg}>
                <Image
                    src={backgrounds.bgSubtract}
                    alt={'backgrounds'}
                    layout="fill"
                />
            </div>
            <div className={style.avatar}>
                <Image src={icons.dish2} alt="user" layout="fill" />
            </div>
            <div className={style.nameUser}>duykhanh</div>
            <div className={style.groupBtn}>
                <Link href="/acount">
                    <a className={style.btn}>
                        Tài khoản
                        <span className={style.icon}>
                            <RiArrowRightSLine />
                        </span>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default NavBottom;
