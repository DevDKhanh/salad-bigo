import React, { useCallback, useState } from 'react';

import Input from '../../../components/input/Input';
import style from '../Auth.module.scss';
import Link from 'next/link';
import Button from '../../../components/button/Button';
import NavHeader from '../../../components/widgets/NavHeader';
import RequiredLogout from '../../../components/protected/RequiredLogout';
import { useDispatch } from 'react-redux';
import useValidate from '../../../common/hooks/useValidate';
import { toast } from 'react-toastify';
import axios from 'axios';
import { useRouter } from 'next/router';
import { login } from '../../../redux/actions/auth';
import { setList } from '../../../redux/actions/wheel';
import { setCoin, setUserData } from '../../../redux/actions/user';
/*===========> INTERFACE <==========*/
interface typeDataForm {
    phone: string;
    password: string;
    re_password: string;
    full_name: string;
}

interface typeMessage {
    phone?: string;
    password?: string;
    re_password?: string;
    full_name?: string;
}

/*===========> MAIN COMPONENT <==========*/
function Signup() {
    const dispatch = useDispatch();
    const router = useRouter();
    const validate = useValidate;
    const [dataForm, setDataForm] = useState<typeDataForm>({
        phone: '',
        password: '',
        re_password: '',
        full_name: '',
    });
    const [message, setMessage] = useState<typeMessage>();

    /********** Handle Functions **********/
    const handleChange = useCallback((e: any) => {
        const { name, value } = e.target;

        setDataForm((prev: any) => ({ ...prev, [name]: value })); //=> add value form interface
        setMessage((prev: any) => ({ ...prev, [name]: null })); //==> remove message error
    }, []);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const { phone, password, fullName, rePassword } = handleCheckForm();

        if (phone && password && fullName && rePassword) {
            (async () => {
                try {
                    const res: any = await axios.post<typeDataForm>(
                        '/api/signup',
                        dataForm
                    );
                    if (res) {
                        const { data } = res;
                        if (data.code === 0) {
                            toast.success('Đăng ký thành công');
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
                            // router.replace('/auth/login');
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
        setMessage((prev: any) => ({ ...prev, [name]: null })); //==> remove message error
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
        const rePassword = validate({
            nameMessage: 're_password',
            value: dataForm.re_password,
            isRequired: true,
            isConfirm: true,
            valueConfirm: dataForm.password,
            onSetMessage: setMessage,
        });
        const fullName = validate({
            nameMessage: 'full_name',
            value: dataForm.full_name,
            isRequired: true,
            onSetMessage: setMessage,
        });
        return { phone, password, fullName, rePassword };
    };
    /********** end handle functions **********/
    return (
        <RequiredLogout>
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.form}>
                        <NavHeader href="/auth/login" title="Đăng ký" />
                        <div className="page-main">
                            <form onSubmit={handleSubmit}>
                                <Input
                                    label="Họ và tên"
                                    placeholder={`Nhập họ và tên`}
                                    type="text"
                                    name="full_name"
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    message={message?.full_name}
                                    value={dataForm.full_name}
                                />
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
                                <Input
                                    label="Nhập lại mật khẩu"
                                    placeholder={`Nhập lại mật khẩu`}
                                    type="password"
                                    name="re_password"
                                    onChange={handleChange}
                                    onFocus={handleFocus}
                                    message={message?.re_password}
                                    value={dataForm.re_password}
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
        </RequiredLogout>
    );
}

export default Signup;
