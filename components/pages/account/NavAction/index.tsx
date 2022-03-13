import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiLogoutBoxLine } from 'react-icons/ri';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import icons from '../../../../constants/images/icon';
import Popup from '../../../common/Popup';
import { RootState } from '../../../../redux/reducers';
import style from './NavAction.module.scss';
import { logout } from '../../../../redux/actions/auth';
import axios from 'axios';

function NavAction() {
    const dispatch = useDispatch();
    const { coin } = useSelector((state: RootState) => state.user);
    const { token } = useSelector((state: RootState) => state.auth);

    const [showPopup, setShowPopup] = useState<boolean>(false);
    const [showPopupContact, setShowPopupContact] = useState<boolean>(false);

    const handleLogout = async () => {
        try {
            await axios.post<any>(`/api/logout`, {
                token: token,
            });
            dispatch(logout());
        } catch (err) {}
    };

    return (
        <div className={style.container}>
            <Link href="/wallet">
                <a className={style.item}>
                    <span>Xu của tôi</span>
                    <div className={style.coinNumber}>
                        <span>{coin}</span>
                        <span className={style.iconIcon}>
                            <Image
                                src={icons.coin}
                                alt={'coin'}
                                layout="fill"
                            />
                        </span>
                    </div>
                </a>
            </Link>
            <Link href="/">
                <a className={style.item}>
                    <span>Điều khoản chính sách</span>
                </a>
            </Link>
            <div
                className={style.item}
                onClick={() => setShowPopupContact(true)}
            >
                <span>Liên hệ</span>
            </div>
            <Link href="/account/change-pass">
                <a className={style.item}>
                    <span>Đổi mật khẩu</span>
                </a>
            </Link>
            <div
                className={clsx([style.item, style.logout])}
                onClick={() => setShowPopup(true)}
            >
                <span className={style.icon}>
                    <RiLogoutBoxLine />
                </span>
                <span>Đăng xuất</span>
            </div>
            <Popup
                title="Xác nhận"
                content="Bạn chắc chắn muốn đăng xuất tài khoản?"
                isShow={showPopup}
                onClose={() => setShowPopup(false)}
                onYes={handleLogout}
            />
            <Popup
                title="Thông báo"
                content="Gọi hotline: 19001900"
                isShow={showPopupContact}
                onClose={() => setShowPopupContact(false)}
            />
        </div>
    );
}

export default NavAction;
function dispatch(arg0: any) {
    throw new Error('Function not implemented.');
}
