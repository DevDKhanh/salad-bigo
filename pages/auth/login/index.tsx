import React from 'react';
import Image from 'next/image';

import Input from '../../../components/input/Input';
import icons from '../../../constants/images/icon';
import style from '../Auth.module.scss';
import Link from 'next/link';
import Button from '../../../components/button/Button';
import backgrounds from '../../../constants/images/background';

function Login() {
    return (
        <div className={style.container}>
            <div className={style.main}>
                <div className={style.img}>
                    <Image src={backgrounds.bg1} alt="bg" layout="fill" />
                </div>
                <div className={style.form}>
                    <div className="page-main">
                        <div className={style.logo}>
                            <Image src={icons.logo} alt="logo" layout="fill" />
                        </div>
                        <form>
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
                            <Link href="/auth/forgot-password">
                                <a className={style.link}>Quên mật khẩu</a>
                            </Link>
                            <Button primary1>ĐĂNG NHẬP</Button>
                        </form>
                    </div>
                </div>
                <div className={style.nav}>
                    <p>
                        Bạn chưa có tài khoản?
                        <Link href="/auth/signup">
                            <a>Đăng ký</a>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
