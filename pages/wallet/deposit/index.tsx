import clsx from 'clsx';
import React, { Fragment } from 'react';
import { RiSpam2Line } from 'react-icons/ri';
import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input';
import NavHeader from '../../../components/widgets/NavHeader';
import style from './Deposit.module.scss';

function Deposit() {
    return (
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
                        readOnly="true"
                    />
                    <Input
                        label="Số tài khoản"
                        placeholder={`Nhập số tài khoản`}
                        type="text"
                        value="3604123456789"
                        readOnly="true"
                    />
                    <Input
                        label="Ngân hàng"
                        placeholder={`Nhập mật khẩu`}
                        type="text"
                        value="Vietcombank"
                        readOnly="true"
                    />
                    <Input
                        label="Chủ tài khoản"
                        placeholder={`Nhập mật khẩu`}
                        type="text"
                        value="Nguyen hoang huy"
                        readOnly="true"
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
            <span className={clsx(['page-main', style.groupBtn])}>
                <Button primary1>ĐĂNG</Button>
            </span>
        </div>
    );
}

export default Deposit;
