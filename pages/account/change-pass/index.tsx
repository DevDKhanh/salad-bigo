import axios from 'axios';
import clsx from 'clsx';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import authAPI from '../../../api/auth';
import useValidate from '../../../common/hooks/useValidate';
import Button from '../../../components/button/Button';
import Popup from '../../../components/common/Popup';
import Input from '../../../components/input/Input';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import NavHeader from '../../../components/widgets/NavHeader';
import { RootState } from '../../../redux/reducers';
import style from './ChangePass.module.scss';
/*===========> INTERFACE <==========*/
interface typeDataForm {
    password: string;
    re_newPassword: string;
    newPassword: string;
}

interface typeMessage {
    password?: string;
    re_newPassword?: string;
    newPassword?: string;
}

/*===========> MAIN COMPONENT <==========*/
function ChangePass() {
    const validate = useValidate;
    const [showPopup, setShowPopup] = useState<boolean>(false);
    const { token } = useSelector((state: RootState) => state.auth);
    const [dataForm, setDataForm] = useState<typeDataForm>({
        password: '',
        re_newPassword: '',
        newPassword: '',
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
        setShowPopup(false);
        const { password, rePassword, newPassword } = handleCheckForm();

        if (password && newPassword && rePassword) {
            (async () => {
                try {
                    const res: any = await axios.post<any>(
                        '/api/change-pass',
                        dataForm
                    );
                    if (res) {
                        const { data } = res;
                        if (data.result.code === 0) {
                            toast.success('Đổi mật khẩu thành công');
                            setDataForm({
                                password: '',
                                re_newPassword: '',
                                newPassword: '',
                            });
                        } else {
                            toast.warn(data.result?.message);
                        }
                    }
                } catch (e: any) {
                    toast.error('Đã xảy ra lỗi, tải lại trang!');
                }
            })();
        }
    };

    const handleShowPopup = () => {
        const { password, rePassword, newPassword } = handleCheckForm();
        if (password && newPassword && rePassword) {
            setShowPopup(true);
        }
    };

    const handleFocus = useCallback((name: string) => {
        setMessage((prev: any) => ({ ...prev, [name]: null })); //==> remove message error
    }, []);

    const handleCheckForm = () => {
        const password = validate({
            nameMessage: 'password',
            value: dataForm.password,
            isRequired: true,
            onSetMessage: setMessage,
        });
        const rePassword = validate({
            nameMessage: 're_newPassword',
            value: dataForm.re_newPassword,
            isRequired: true,
            isConfirm: true,
            valueConfirm: dataForm.newPassword,
            onSetMessage: setMessage,
        });
        const newPassword = validate({
            nameMessage: 'newPassword',
            value: dataForm.newPassword,
            isRequired: true,
            onSetMessage: setMessage,
        });
        return { password, newPassword, rePassword };
    };
    /********** end handle functions **********/
    return (
        <RequiredAuth>
            <div className={style.container}>
                <div className={style.main}>
                    <NavHeader href="/account" title="Đổi mật khẩu" />
                    <div className={clsx(['page-main', style.form])}>
                        <Input
                            label="Mật khẩu cũ"
                            placeholder="Nhập mật khẩu cũ"
                            type="password"
                            name="password"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            message={message?.password}
                            value={dataForm.password}
                        />
                        <Input
                            label="Mật khẩu mới"
                            placeholder="Nhập mật khẩu mới"
                            type="password"
                            name="newPassword"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            message={message?.newPassword}
                            value={dataForm.newPassword}
                        />
                        <Input
                            label="Nhập lại mật khẩu mới"
                            placeholder="Nhập lại mật khẩu mới"
                            type="password"
                            name="re_newPassword"
                            onChange={handleChange}
                            onFocus={handleFocus}
                            message={message?.re_newPassword}
                            value={dataForm.re_newPassword}
                        />
                    </div>
                    <Popup
                        title="Thông báo"
                        content="Bạn xác nhận đổi mật khẩu mới?"
                        isShow={showPopup}
                        onClose={() => setShowPopup(false)}
                        onYes={handleSubmit}
                    />
                </div>
                <span className={clsx(['page-main', style.groupBtn])}>
                    <Button primary1 onClick={handleShowPopup}>
                        GỬI THÔNG TIN
                    </Button>
                </span>
            </div>
        </RequiredAuth>
    );
}

export default ChangePass;
