import React, { memo } from 'react';
import Image from 'next/image';
import icons from '../../../../constants/images/icon';
import style from './HeaederInfo.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';

function HeaederInfo() {
    const { userData } = useSelector((state: RootState) => state.user);

    return (
        <div className={style.main}>
            <div className={style.userData}>
                <div className={style.avatar}>
                    <img src={userData.avatar} alt={userData.full_name} />
                </div>
                <div className={style.usename}>
                    <small>Hello</small>
                    <p>{userData.full_name}</p>
                </div>
            </div>
            <div className={style.icon}>
                <Image src={icons.logo} alt="logo" layout="fill" />
            </div>
        </div>
    );
}

export default memo(HeaederInfo);
