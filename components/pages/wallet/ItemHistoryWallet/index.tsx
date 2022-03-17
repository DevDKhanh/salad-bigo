import React from 'react';
import Image from 'next/image';
import { RiArrowRightSFill } from 'react-icons/ri';
import icons from '../../../../constants/images/icon';
import style from './ItemHistoryWallet.module.scss';
import Link from 'next/link';
import { useConvertCoin } from '../../../../common/hooks/useConvertCoin';
import { useConvertDate } from '../../../../common/hooks/useConvertDate';
import clsx from 'clsx';

interface props {
    data: {
        account_name: string;
        account_number: string;
        amount: number;
        bank_name: string;
        created_date: string;
        id: number;
        recharge_code: string;
        status: string;
        status_name: string;
        wallet_code: string;
    };
}

function ItemHistoryWallet({ data }: props) {
    const coin = useConvertCoin;
    const convertDate = useConvertDate;
    return (
        <Link href={`/wallet/deposit/${data.id}`}>
            <a className={style.main}>
                <div className={style.title}>
                    <span
                        className={clsx([
                            style.status,
                            style[`status-${data.status}`],
                        ])}
                    >
                        {data.status_name}
                    </span>
                    <span className={style.icon}>
                        <RiArrowRightSFill />
                    </span>
                </div>
                <div className={style.bet}>
                    <div className={style.item}>
                        <div>Số tiền nạp:</div>
                        <div className={style.coin}>
                            {coin(data.amount * 1000)}
                        </div>
                    </div>
                    <div className={style.item}>
                        <div>Đã đặt quy đổi:</div>
                        <div className={style.coin}>
                            <span className={style.iconIcon}>
                                <Image
                                    src={icons.coin}
                                    alt={'coin'}
                                    layout="fill"
                                />
                            </span>
                            {coin(data.amount)}
                        </div>
                    </div>
                </div>
                <time>
                    {convertDate(data.created_date).getFullTime()}{' '}
                    {convertDate(data.created_date).getDate()}
                </time>
            </a>
        </Link>
    );
}

export default ItemHistoryWallet;
