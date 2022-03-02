import { useRouter } from 'next/router';
import en from '../../public/lang/en';
import vi from '../../public/lang/vi';

interface types {
    value?: string;
    valueConfirm?: string;
    isConfirm?: boolean;
    onSetMessage?: any;
    nameMessage?: string;
    max?: number;
    min?: number;
    message?: string;
    isNumber?: boolean;
    isRequired?: boolean;
}

const useValidate = ({
    value = '',
    valueConfirm,
    isConfirm,
    onSetMessage,
    nameMessage,
    max,
    min,
    message,
    isNumber,
    isRequired,
}: types) => {
    const setMessage = (str: string) => {
        if (nameMessage) {
            onSetMessage((prev: any) => ({ ...prev, [nameMessage]: str }));
        } else {
            onSetMessage(str);
        }
    };

    if (isRequired) {
        if (value.trim() === '') {
            setMessage(message || `Vui lòng nhập trường này`);
            return false;
        }
    }

    if (isNumber) {
        for (let i of value) {
            if (isNaN(Number(i))) {
                setMessage(message || `Vui lòng nhập số`);
                return false;
            }
        }
    }

    if (max) {
        if (value.trim().length > max) {
            setMessage(message || `Nhập tối đa ${max} kí tự`);
            return false;
        }
    }

    if (min) {
        if (value.trim().length < min) {
            setMessage(message || `Nhập tối thiểu ${min} kí tự`);
            return false;
        }
    }

    if (valueConfirm && isConfirm) {
        if (value !== valueConfirm) {
            setMessage(message || `Mật khẩu nhập lại chưa chính xác`);
            return false;
        }
    }

    return true;
};

export default useValidate;
