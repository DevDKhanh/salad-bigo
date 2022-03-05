import clsx from 'clsx';
import React, { useState } from 'react';
import Button from '../../../components/button/Button';
import Popup from '../../../components/common/Popup';
import Input from '../../../components/input/Input';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import NavHeader from '../../../components/widgets/NavHeader';
import style from './ChangePass.module.scss';

function ChangePass() {
    const [showPopup, setShowPopup] = useState<boolean>(false);
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
                        />
                        <Input
                            label="Mật khẩu mới"
                            placeholder="Nhập mật khẩu mới"
                            type="password"
                        />
                        <Input
                            label="Nhập lại mật khẩu mới"
                            placeholder="Nhập lại mật khẩu mới"
                            type="password"
                        />
                    </div>
                    <Popup
                        title="Thông báo"
                        content="Bạn xác nhận đổi mật khẩu mới?"
                        isShow={showPopup}
                        onClose={() => setShowPopup(false)}
                    />
                </div>
                <span className={clsx(['page-main', style.groupBtn])}>
                    <Button primary1 onClick={() => setShowPopup(true)}>
                        GỬI THÔNG TIN
                    </Button>
                </span>
            </div>
        </RequiredAuth>
    );
}

export default ChangePass;
