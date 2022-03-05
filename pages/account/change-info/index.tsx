import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../../../components/button/Button';
import Popup from '../../../components/common/Popup';
import Input from '../../../components/input/Input';
import OverImage from '../../../components/pages/account/OverImage';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import { RootState } from '../../../redux/reducers';

function ChangeInfo() {
    const { userData } = useSelector((state: RootState) => state.user);
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return (
        <RequiredAuth>
            <OverImage hrefBack="/account" />
            <div className="page-main">
                <Input
                    label="Tên của bạn"
                    type="text"
                    value={userData.full_name}
                    readOnly={true}
                />
                <Input
                    label="Giới tính"
                    type="text"
                    placeholder={`Chọn giới tính`}
                    readOnly={true}
                />
                <Input
                    label="Sinh nhật"
                    placeholder={`Nhập ngày sinh nhật`}
                    type="date"
                    readOnly={true}
                />
                <Input
                    label="Tỉnh thành"
                    placeholder={`Chọn tỉnh/TP`}
                    type="text"
                    readOnly={true}
                />
                <Input
                    label="Địa chỉ"
                    placeholder={`Nhập địa chỉ cụ thể`}
                    type="text"
                    readOnly={true}
                />
                <br />
                <Button primary1 onClick={() => setShowPopup(true)}>
                    LƯU LẠI
                </Button>
            </div>
            <Popup
                title="Thông báo"
                content="Xác nhận cập nhật thông tin cá nhân?"
                isShow={showPopup}
                onClose={() => setShowPopup(false)}
            />
        </RequiredAuth>
    );
}

export default ChangeInfo;
