import Link from 'next/link';
import React from 'react';
import { RiArrowLeftLine } from 'react-icons/ri';
import style from './NavHeader.module.scss';

interface props {
    href: string;
    title: string;
}

function NavHeader({ href, title }: props) {
    return (
        <div className={style.main}>
            <Link href={href}>
                <a className={style.icon}>
                    <RiArrowLeftLine />
                </a>
            </Link>
            <h3 className={style.title}>{title}</h3>
        </div>
    );
}

export default NavHeader;
