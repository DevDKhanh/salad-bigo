import clsx from 'clsx';
import React, { Fragment, useState } from 'react';
import { RiSpam2Line } from 'react-icons/ri';
import Button from '../../../components/button/Button';
import Popup from '../../../components/common/Popup';
import Input from '../../../components/input/Input';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import NavHeader from '../../../components/widgets/NavHeader';
import style from './Deposit.module.scss';

function Deposit() {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return (
        <RequiredAuth>
            <div className={style.container}>
                <div>
                    <NavHeader href="/" title="Nạp tiền" />
                    <div className={clsx(['page-main', style.main])}>
                        <Input
                            label="Số tiền nạp"
                            placeholder={`Nhập số tiền nạp`}
                            type="text"
                            name="phone"
                        />
                        <Input
                            label="Mã nạp tiền"
                            placeholder={`Nhập mã nạp tiền`}
                            type="text"
                            value="NT123456"
                            readOnly={true}
                        />
                        <Input
                            label="Số tài khoản"
                            placeholder={`Nhập số tài khoản`}
                            type="text"
                            value="3604123456789"
                            readOnly={true}
                        />
                        <Input
                            label="Ngân hàng"
                            placeholder={`Nhập mật khẩu`}
                            type="text"
                            value="Vietcombank"
                            readOnly={true}
                        />
                        <Input
                            label="Chủ tài khoản"
                            placeholder={`Nhập mật khẩu`}
                            type="text"
                            value="Nguyen hoang huy"
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
                    content="Bạn xác nhận gửi yêu cầu nạp tiền?"
                    isShow={showPopup}
                    onClose={() => setShowPopup(false)}
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
