import React from 'react';
import Image from 'next/image';

import Input from '../../../components/input/Input';
import icons from '../../../constants/images/icon';
import style from '../Auth.module.scss';
import Link from 'next/link';
import Button from '../../../components/button/Button';
import backgrounds from '../../../constants/images/background';
import NavHeader from '../../../components/widgets/NavHeader';

function Signup() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.form}>
                    <NavHeader href="/auth/login" title="Đăng ký" />
                    <div className="page-main">
                        <form>
                            <Input
                                label="Họ và tên"
                                placeholder={`Nhập họ và tên`}
                                type="text"
                                name="phone"
                            />
                            <Input
                                label="Số điện thoại"
                                placeholder={`Nhập số điện thoại`}
                                type="text"
                                name="phone"
                            />
                            <Input
                                label="Mật khẩu"
                                placeholder={`Nhập mật khẩu`}
                                type="password"
                                name="password"
                            />
                            <Input
                                label="Nhập lại mật khẩu"
                                placeholder={`Nhập lại mật khẩui`}
                                type="text"
                                name="phone"
                            />
                            <div className={style.btnGroup}>
                                <Button primary1>ĐĂNG KÝ</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className={style.nav}>
                    <p>
                        Bạn đã có tài khoản?
                        <Link href="/auth/login">
                            <a>Đăng nhập</a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signup;