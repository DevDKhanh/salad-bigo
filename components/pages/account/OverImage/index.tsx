import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import { RiArrowLeftLine, RiPencilFill } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';
import style from './OverImage.module.scss';
/*===========> INTERFACE <==========*/
interface props {
    isChange?: boolean;
    hrefBack: string;
}

/*===========> MAIN COMPONENT <==========*/
function OverImage({ isChange, hrefBack }: props) {
    const { userData } = useSelector((state: RootState) => state.user);
    return (
        <div>
            <div className={style.main}>
                <div className={style.overImage}>
                    <Link href={hrefBack}>
                        <a className={style.buttonBack}>
                            <RiArrowLeftLine />
                        </a>
                    </Link>
                    <img
                        src={
                            'https://dbk.vn/uploads/ckfinder/images/1-content/anh-dep-1.jpg'
                        }
                        alt="OverImage"
                    />
                </div>
                <div className={style.avatar}>
                    <img src={userData.avatar} alt="Avatar" />
                </div>
            </div>
            <div className={style.info}>
                <div className={style.nameuser}>{userData.full_name}</div>
                <Link href="/account/change-info">
                    <a className={clsx([{ [style.link]: !isChange }])}>
                        <span className={style.icon}>
                            <RiPencilFill />
                        </span>
                        Chỉnh sửa thông tin cá nhân
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default OverImage;
