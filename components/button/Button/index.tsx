import clsx from 'clsx';
import Link from 'next/link';
import { MouseEventHandler } from 'react';

import { useStyleClass } from '../../../common/hooks/useStyleClass';
import style from './Button.module.scss';

interface props {
    onClick?: MouseEventHandler;
    children?: React.ReactNode;
    [props: string]: any;
}

function Button({
    children,
    onClick,
    href,
    className,
    target,
    ...props
}: props): JSX.Element {
    const styleClass = useStyleClass(props, style);

    return (
        <>
            {!href ? (
                <button
                    onClick={onClick}
                    className={clsx([styleClass, style.btn, className])}
                >
                    {children}
                </button>
            ) : (
                <Link href={`${href}`}>
                    <a
                        className={clsx([styleClass, style.btn, className])}
                        target={target}
                    >
                        {children}
                    </a>
                </Link>
            )}
        </>
    );
}

export default Button;
