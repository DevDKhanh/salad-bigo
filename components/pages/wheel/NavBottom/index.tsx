import React, { memo } from 'react';
import Image from 'next/image';
import icons from '../../../../constants/images/icon';
import style from './NavBottom.module.scss';
import Link from 'next/link';
import { RiArrowRightSLine } from 'react-icons/ri';
import backgrounds from '../../../../constants/images/background';
import { RootState } from '../../../../redux/reducers';
import { useSelector } from 'react-redux';

function NavBottom() {
    const { userData } = useSelector((state: RootState) => state.user);
    return (
        <div className={style.container}>
            <div className={style.bg}>
                <img src={backgrounds.bgSubtract.src} alt={'backgrounds'} />
            </div>
            <div className={style.avatar}>
                <img src={userData.avatar} alt="user" />
            </div>
            <div className={style.nameUser}>{userData.full_name}</div>
            <div className={style.groupBtn}>
                <Link href="/account">
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

export default memo(NavBottom);
