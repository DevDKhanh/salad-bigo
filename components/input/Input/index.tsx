import clsx from 'clsx';
import { memo, ReactNode, useEffect, useState } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';
import style from './Input.module.scss';

interface props {
    className?: string;
    label?: string;
    type?: string;
    children?: ReactNode;
    placeholder?: string;
    required?: boolean;
    message?: string;
    name?: string;
    onFocus?: any;
    [props: string]: any;
}

function Input({
    type = 'text',
    children,
    label,
    className,
    name,
    placeholder,
    message,
    onFocus,
    required = false,
    ...props
}: props) {
    const [showPass, setShowPass] = useState<boolean>(false);
    const [error, setError] = useState<any>(message);
    const isPassword = type === 'password';

    useEffect(() => {
        setError(message);
    }, [message]);

    const handleFocus = () => {
        setError(null);
        if (typeof onFocus === 'function') {
            onFocus(name);
        }
    };

    const handleToggleShowPass = () => {
        setShowPass(!showPass);
    };

    return (
        <div
            className={clsx([
                className,
                style.groupInput,
                { [style.error]: error },
            ])}
        >
            <div className={clsx([style.groupForm])}>
                <div className={style.groupLabel}>
                    <label className={style.label}>
                        {label}
                        {required && <span>*</span>}
                    </label>
                    {children}
                </div>
                <div className={style.groupInput}>
                    <input
                        type={showPass ? 'text' : type}
                        placeholder={placeholder}
                        name={name}
                        onFocus={handleFocus}
                        {...props}
                    />
                    {isPassword && (
                        <span
                            className={style.toggleType}
                            onClick={handleToggleShowPass}
                        >
                            {showPass ? <IoEyeOutline /> : <IoEyeOffOutline />}
                        </span>
                    )}
                </div>
            </div>
            {error && <span className={style.message}>{error}</span>}
        </div>
    );
}

export default memo(Input);
