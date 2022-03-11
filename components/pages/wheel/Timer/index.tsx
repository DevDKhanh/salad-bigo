import React, { memo, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';
import style from './Timer.module.scss';

interface props {
    onStart: () => void;
    isStarting: boolean;
}

function Timer({ onStart, isStarting }: props) {
    const { userData } = useSelector((state: RootState) => state.user);
    const [timer, setTimer] = useState<number>(10);
    /*---------- Count down start wheel ----------*/
    useEffect(() => {
        if (!isStarting) {
            setTimer((prev: number) => 10);
        }
        let idTime = setInterval(() => {
            if (!isStarting) {
                setTimer((prev: number) => {
                    if (prev <= 1) {
                        return 0;
                    }
                    return prev - 1;
                });
            }
        }, 1000);
        return () => {
            clearInterval(idTime);
        };
    }, [isStarting]);

    /*---------- Start wheel if done countdown ----------*/
    useEffect(() => {
        if (timer == 0) {
            onStart();
        }
    }, [timer]);

    return (
        <div className={style.main}>
            <div className={style.time}>
                <span>Select time</span>
                <time>{timer}s</time>
            </div>
        </div>
    );
}

export default memo(Timer);
