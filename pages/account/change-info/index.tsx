import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import axios from 'axios';

import { RootState } from '../../../redux/reducers';
import Button from '../../../components/button/Button';
import Popup from '../../../components/common/Popup';
import Input from '../../../components/input/Input';
import OverImage from '../../../components/pages/account/OverImage';
import RequiredAuth from '../../../components/protected/RequiredAuth';
import { useConvertDate } from '../../../common/hooks/useConvertDate';
import style from './ChangeInfo.module.scss';

function ChangeInfo() {
    const convertDate = useConvertDate;
    const { userData } = useSelector((state: RootState) => state.user);

    const [dataForm, setDataForm] = useState<any>(userData);
    const [showPopup, setShowPopup] = useState<boolean>(false);

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setDataForm((prev: any) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        (async () => {
            try {
                await axios.post<any>('/api/update-info', {
                    ...dataForm,
                    fullname: dataForm.full_name,
                });
                toast.success('Cập nhật thông tin thành công');
            } catch (e) {
                toast.error('Đã xảy ra lỗi');
            }
        })();
    };

    return (
        <RequiredAuth>
            <OverImage hrefBack="/account" />
            <div className="page-main">
                <Input
                    label="Tên của bạn"
                    type="text"
                    name="full_name"
                    value={dataForm?.full_name}
                    onChange={handleChange}
                />
                <div className={style.groupForm}>
                    <div className={style.groupLabel}>
                        <label className={style.label}>Giới tính</label>
                    </div>
                    <div className={style.groupInput}>
                        <select
                            onChange={handleChange}
                            value={dataForm?.gender}
                            name="gender"
                        >
                            <option value="">Chọn giới tính</option>
                            <option value="01">Nam</option>
                            <option value="02">Nữ</option>
                        </select>
                    </div>
                </div>
                <Input
                    label="Sinh nhật"
                    name="birthday"
                    placeholder={`Nhập ngày sinh nhật`}
                    type="date"
                    value={convertDate(dataForm?.birthday).getDateInput()}
                    onChange={handleChange}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    placeholder={`Nhập email`}
                    value={dataForm?.email}
                    onChange={handleChange}
                />
                <Input
                    label="Tỉnh thành"
                    placeholder={`Tỉnh/TP`}
                    type="text"
                    name="province"
                    value={dataForm?.province}
                    onChange={handleChange}
                />
                <Input
                    label="Địa chỉ"
                    placeholder={`Nhập địa chỉ cụ thể`}
                    type="text"
                    name="address"
                    value={dataForm?.address}
                    onChange={handleChange}
                />
                <div className={style.btn}>
                    <Button primary1 onClick={() => setShowPopup(true)}>
                        LƯU LẠI
                    </Button>
                </div>
            </div>
            <Popup
                title="Thông báo"
                content="Xác nhận cập nhật thông tin cá nhân?"
                isShow={showPopup}
                onClose={() => setShowPopup(false)}
                onYes={handleSubmit}
            />
        </RequiredAuth>
    );
}

export default ChangeInfo;
