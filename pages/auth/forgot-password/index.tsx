import React, { useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import axios from 'axios';
import Link from 'next/link';

import Input from '../../../components/input/Input';
import Button from '../../../components/button/Button';
import NavHeader from '../../../components/widgets/NavHeader';
import RequiredLogout from '../../../components/protected/RequiredLogout';
import useValidate from '../../../common/hooks/useValidate';
import style from '../Auth.module.scss';
/*===========> INTERFACE <==========*/
interface typeDataForm {
    email: string;
    new_password: string;
    rePassword: string;
}

interface typeMessage {
    email?: string;
    new_password?: string;
    rePassword?: string;
}

/*===========> MAIN COMPONENT <==========*/
function ForgotPassword() {
    const router = useRouter();
    const { mail, token } = router.query;
    const validate = useValidate;
    const [dataForm, setDataForm] = useState<typeDataForm>({
        email: '',
        new_password: '',
        rePassword: '',
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
        const { email } = handleCheckForm();

        if (email) {
            (async () => {
                try {
                    const res: any = await axios.post<typeDataForm>(
                        '/api/forgot-password',
                        dataForm
                    );
                    if (res) {
                        const { data } = res;
                        if (data.code === 1) {
                            toast.info(
                                'Link quên mật khẩu đã được gửi, vui lòng kiểm tra mail'
                            );
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

    const handleSubmitChangePass = (e: any) => {
        e.preventDefault();
        const { new_password, rePassword } = handleCheckForm();

        if (new_password && rePassword) {
            (async () => {
                try {
                    const res: any = await axios.post<typeDataForm>(
                        '/api/new-password',
                        { ...dataForm, token: token, email: mail }
                    );
                    if (res) {
                        const { data } = res;
                        if (data.code === 1) {
                            toast.success('Đổi mật khẩu thành công!');
                            router.replace('/auth/login');
                        } else {
                            toast.warn(data?.result?.message);
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
        const email = validate({
            nameMessage: 'email',
            value: dataForm.email,
            isRequired: true,
            onSetMessage: setMessage,
        });
        const new_password = validate({
            nameMessage: 'new_password',
            value: dataForm.new_password,
            isRequired: true,
            onSetMessage: setMessage,
        });
        const rePassword = validate({
            nameMessage: 'rePassword',
            value: dataForm.rePassword,
            valueConfirm: dataForm.new_password,
            isRequired: true,
            isConfirm: true,
            onSetMessage: setMessage,
        });
        return { email, rePassword, new_password };
    };
    /********** end handle functions **********/
    return (
        <RequiredLogout>
            <div className={style.container}>
                <div className={style.main}>
                    <div className={style.form}>
                        <NavHeader href="/auth/login" title="Quên mật khẩu" />
                        <div className="page-main">
                            {mail && token ? (
                                <form onSubmit={handleSubmitChangePass}>
                                    <Input
                                        label="Mật khẩu mới"
                                        placeholder={`Nhập mật khẩu mới`}
                                        type="password"
                                        name="new_password"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        message={message?.new_password}
                                        value={dataForm.new_password}
                                    />
                                    <Input
                                        label="Nhập lại mật khẩu"
                                        placeholder={`Nhập lại mật khẩu mới`}
                                        type="password"
                                        name="rePassword"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        message={message?.rePassword}
                                        value={dataForm.rePassword}
                                    />
                                    <div className={style.btnGroup}>
                                        <Button primary1>ĐỔI MẬT KHẨU</Button>
                                    </div>
                                </form>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <Input
                                        label="Email đăng ký"
                                        placeholder={`Nhập email đăng ký`}
                                        type="text"
                                        name="email"
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        message={message?.email}
                                        value={dataForm.email}
                                    />
                                    <div className={style.btnGroup}>
                                        <Button primary1>GỬI LINK</Button>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                    <div className={style.nav}>
                        <p>
                            Tôi đã nhớ mật khẩu?
                            <Link href="/auth/login">
                                <a>Đăng nhập ngay</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </RequiredLogout>
    );
}

export default ForgotPassword;
