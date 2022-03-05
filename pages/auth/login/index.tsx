import React, { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

import Input from '../../../components/input/Input';
import icons from '../../../constants/images/icon';
import Button from '../../../components/button/Button';
import backgrounds from '../../../constants/images/background';
import useValidate from '../../../common/hooks/useValidate';
import style from '../Auth.module.scss';
import { RootState } from '../../../redux/reducers';
import axios from 'axios';
import { login } from '../../../redux/actions/auth';
import { toast } from 'react-toastify';
import RequiredLogout from '../../../components/protected/RequiredLogout';
import { setCoin, setUserData } from '../../../redux/actions/user';
import { setList } from '../../../redux/actions/wheel';
/*===========> INTERFACE <==========*/
interface typeDataForm {
    phone?: string;
    password?: string;
}

interface typeMessage {
    phone?: string;
    password?: string;
}

/*===========> MAIN COMPONENT <==========*/
function Login() {
    const dispatch = useDispatch();
    const validate = useValidate;
    const [dataForm, setDataForm] = useState<typeDataForm>({
        phone: '',
        password: '',
    });
    const [message, setMessage] = useState<typeMessage>();

    /********** Handle Functions **********/
    const handleChange = useCallback((e: any) => {
        const { name, value } = e.target;

        setDataForm((prev) => ({ ...prev, [name]: value })); //=> add value form interface
        setMessage((prev) => ({ ...prev, [name]: null })); //==> remove message error
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { phone, password } = handleCheckForm();

        if (phone && password) {
            (async () => {
                try {
                    const res: any = await axios.post<typeDataForm>(
                        `/api/login`,
                        { ...dataForm }
                    );
                    if (res) {
                        const { data } = res;
                        if (data.code === 0) {
                            /*---------- update state ----------*/
                            dispatch(
                                login({
                                    token: data.payload.token,
                                })
                            );
                            dispatch(setList(data.listItemWheel));
                            dispatch(setCoin(data.payload.coin));
                            dispatch(setUserData(data.payload));
                        } else {
                            toast.warn(data?.message);
                        }
                    }
                } catch (e: any) {
                    toast.error('Đã xảy ra lỗi, tải lại trang!');
                }
            })();
        }
    };

    const handleFocus = useCallback((name: string) => {
        setMessage((prev) => ({ ...prev, [name]: null })); //==> remove message error
    }, []);

    const handleCheckForm = () => {
        const phone = validate({
            nameMessage: 'phone',
            value: dataForm.phone,
            isRequired: true,
            onSetMessage: setMessage,
        });
        const password = validate({
            nameMessage: 'password',
            value: dataForm.password,
            isRequired: true,
            onSetMessage: setMessage,
        });
        return { phone, password };
    };
    /********** end handle functions **********/
    return (
        <RequiredLogout>
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.img}>
                        <Image src={backgrounds.bg1} alt="bg" layout="fill" />
                    </div>
                    <div className={style.form}>
                        <div className="page-main">
                            <div className={style.logo}>
                                <Image
                                    src={icons.logo}
                                    alt="logo"
                                    layout="fill"
                                />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    label="Số điện thoại"
                                    placeholder={`Nhập số điện thoại`}
                                    type="text"
                                    name="phone"
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    message={message?.phone}
                                    value={dataForm.phone}
                                />
                                <Input
                                    label="Mật khẩu"
                                    placeholder={`Nhập mật khẩu`}
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    message={message?.password}
                                    value={dataForm.password}
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
        </RequiredLogout>
    );
}

export default Login;
