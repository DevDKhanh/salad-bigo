import React, { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import Image from 'next/image';
import style from './ItemWheel.module.scss';
import { RootState } from '../../../../redux/reducers';
import icons from '../../../../constants/images/icon';

interface props {
    isActive?: boolean;
    img: string;
    isStarting: boolean;
    winTimes: number;
}

function ItemWheel({ isActive, img, winTimes, isStarting }: props) {
    const { currentBet, coin } = useSelector((state: RootState) => state.user);
    const [coinBet, setCoinBet] = useState<number>(0);

    useEffect(() => {
        if (!isStarting) {
            setCoinBet(0);
        }
    }, [isStarting]);

    const handleBet = useCallback(() => {
        if (!isStarting) {
            setCoinBet((prev) => prev + currentBet);
        }
    }, [isStarting, currentBet]);

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
