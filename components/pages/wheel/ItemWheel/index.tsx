import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import Image from 'next/image';
import style from './ItemWheel.module.scss';
import { RootState } from '../../../../redux/reducers';
import icons from '../../../../constants/images/icon';
import { setCoin } from '../../../../redux/actions/user';
import { toast } from 'react-toastify';
import {
    getItemStorage,
    setItemStorage,
} from '../../../../common/utils/localStorage';
import axiosClient from '../../../../api';

interface props {
    data: any;
    isActive?: boolean;
    img: string;
    isStarting: boolean;
    winTimes: number;
}

function ItemWheel({ data, isActive, img, winTimes, isStarting }: props) {
    const dispatch = useDispatch();
    const { currentBet, coin, userData } = useSelector(
        (state: RootState) => state.user
    );
    const [coinBet, setCoinBet] = useState<number>(0);

    useEffect(() => {
        if (!isStarting) {
            setCoinBet(0);
            setItemStorage('listBet', {}); //demo
        }
    }, [isStarting]);

    const handleBet = useCallback(async () => {
        if (!isStarting) {
            if (coin >= currentBet) {
                const res: any = await axiosClient.post<any>(
                    `${origin}/api/bet`,
                    {
                        date: userData.rotation_time,
                        rotation_code: data.rotation_code,
                        rotation_time: userData.rotation_time,
                        bet_coin: currentBet,
                    }
                );
                if (res) {
                    setCoinBet((prev) => prev + currentBet);
                    dispatch(setCoin(coin - currentBet));
                }
            } else {
                toast.warn(
                    'Bạn không đủ xu để đặt cược, hãy nạp thêm để tiếp tục'
                );
            }
        }
    }, [isStarting, currentBet, coin]);

    return (
        <div
            className={clsx([
                style.main,
                {
                    [style.active]: isActive && !isStarting,
                    [style.activeStart]: isActive && isStarting,
                    [style.isStarting]: isStarting,
                },
            ])}
            onClick={handleBet}
        >
            <div className={clsx([style.img])}>
                <img src={img} width="30" height="30" />
            </div>
            {coinBet > 0 && (
                <div className={style.bet}>
                    <span className="text-primary-3">Bạn:</span>
                    <span>{coinBet}</span>
                </div>
            )}
            <div
                className={clsx([
                    style.winTimes,
                    { [style.active]: coinBet > 0 },
                ])}
            >
                win {winTimes} times
            </div>
        </div>
    );
}

export default ItemWheel;
