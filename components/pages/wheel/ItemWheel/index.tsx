import React, { memo, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';

import { RootState } from '../../../../redux/reducers';
import { setCoin } from '../../../../redux/actions/user';
import { toast } from 'react-toastify';
import axiosClient from '../../../../api';
import style from './ItemWheel.module.scss';

interface props {
    data: any;
    isActive?: boolean;
    img: string;
    isStarting: boolean;
    winTimes: number;
    coinBetCurrent?: number;
}

function ItemWheel({
    data,
    isActive,
    img,
    winTimes,
    isStarting,
    coinBetCurrent,
}: props) {
    const dispatch = useDispatch();
    const { currentBet, coin, userData } = useSelector(
        (state: RootState) => state.user
    );

    const [coinBet, setCoinBet] = useState<number>(coinBetCurrent || 0);

    useEffect(() => {}, [isStarting]);
    useEffect(() => {
        if (coinBetCurrent) {
            setCoinBet((prev) => prev + coinBetCurrent);
        }
        if (isStarting) {
            setCoinBet(0);
        }
    }, [coinBetCurrent, isStarting]);

    const handleBet = useCallback(async () => {
        if (!isStarting) {
            /*---------- get count down < 10s can't bet ----------*/
            const distance =
                userData.rotation_time + 45000 - new Date().getTime();
            if (distance < 10000) {
                return toast.warn(
                    'Hết thời gian đặt cược rồi nhé, đợi lượt sau nhé bro, chúc may mắn'
                );
            }
            if (coin >= currentBet) {
                try {
                    setCoinBet((prev) => prev + currentBet);
                    dispatch(setCoin(coin - currentBet));
                    await axiosClient.post<any>(`${origin}/api/bet`, {
                        date: userData.rotation_time,
                        rotation_code: data.rotation_code,
                        rotation_time: userData.rotation_time,
                        bet_coin: currentBet,
                    });
                } catch (e) {
                    toast.error('Vui lòng tải lại trang');
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
                    [style.activeBet]: coinBet > 0,
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
            <div className={clsx([style.winTimes])}>win {winTimes} times</div>
        </div>
    );
}

export default memo(ItemWheel);
