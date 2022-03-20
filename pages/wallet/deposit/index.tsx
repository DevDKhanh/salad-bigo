import axios from 'axios';
import clsx from 'clsx';
import Head from 'next/head';
import React, { Fragment, useState } from 'react';
import { RiSpam2Line } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useConvertCoin } from '../../../common/hooks/useConvertCoin';
import Button from '../../../components/button/Button';
import Popup from '../../../components/common/Popup';
import Input from '../../../components/input/Input';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import NavHeader from '../../../components/widgets/NavHeader';
import { RootState } from '../../../redux/reducers';
import style from './Deposit.module.scss';

function Deposit() {
    const convertCoin = useConvertCoin;
    const { userData } = useSelector((state: RootState) => state.user);
    const [dataForm, setDataForm] = useState<any>({ amount: '' });
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const infoBank: any = {
        account_number: '3604123456789',
        bank_name: 'Vietcombank',
        account_name: 'Nguyen Hoang Huy',
        status: '01',
    };

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setDataForm((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!dataForm?.amount) {
            return toast.warn('Vui lòng nhập số tiền muốn nạp');
        }

        (async () => {
            try {
                const formSubmit: any = {
                    ...infoBank,
                    amount: Number(dataForm?.amount) / 1000,
                    recharge_code: userData?.user_code,
                };
                await axios.post<any>('/api/deposit', formSubmit);
                setDataForm({ amount: '' });
                toast.success(
                    'Gửi yêu cầu nạp tiền, bạn vui lòng chờ admin phê duyệt nhé!'
                );
            } catch (err) {}
        })();
    };

    return (
        <RequiredAuth>
            <Head>
                <title>Deposit</title>
            </Head>
            <div className={style.container}>
                <div>
                    <NavHeader href="/" title="Nạp tiền" />
                    <div className={clsx(['page-main', style.main])}>
                        <Input
                            label="Số tiền nạp"
                            placeholder={`Nhập số tiền nạp`}
                            type="text"
                            name="amount"
                            value={dataForm?.amount}
                            onChange={handleChange}
                        />
                        <Input
                            label="Mã nạp tiền"
                            type="text"
                            value={userData?.user_code}
                            readOnly={true}
                        />
                        <Input
                            label="Số tài khoản"
                            type="text"
                            value={infoBank.account_number}
                            readOnly={true}
                        />
                        <Input
                            label="Ngân hàng"
                            type="text"
                            value={infoBank.bank_name}
                            readOnly={true}
                        />
                        <Input
                            label="Chủ tài khoản"
                            type="text"
                            value={infoBank.account_name}
                            readOnly={true}
                        />
                        <div className={style.note}>
                            <span className={style.icon}>
                                <RiSpam2Line />
                            </span>
                            <p>
                                Bạn cần nhập đúng mã nạp tiền vào phần nội dung
                                chuyển khoản để chúng tôi kiểm tra giao dich
                            </p>
                        </div>
                    </div>
                </div>
                <Popup
                    title="Thông báo"
                    content={`Bạn xác nhận gửi yêu cầu nạp ${convertCoin(
                        Number(dataForm?.amount || 0)
                    )}?`}
                    isShow={showPopup}
                    onClose={() => setShowPopup(false)}
                    onYes={handleSubmit}
                />
                <span className={clsx(['page-main', style.groupBtn])}>
                    <Button primary1 onClick={() => setShowPopup(true)}>
                        GỬI THÔNG TIN
                    </Button>
                </span>
            </div>
        </RequiredAuth>
    );
}

export default Deposit;
