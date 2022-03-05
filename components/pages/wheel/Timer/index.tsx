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
    const timeCounter = userData.rotation_time + 6;
    const [timer, setTimer] = useState<any>(0);
    /*---------- Count down start wheel ----------*/
    useEffect(() => {
        let idTime = setInterval(() => {
            if (!isStarting) {
                const secondary = new Date().getSeconds();
                setTimer((prev: any) => {
                    if (secondary == 0 || secondary % timeCounter === 0) {
                        return 0;
                    }
                    return timeCounter - (secondary % timeCounter);
                });
            }
        }, 10);
        return () => {
            clearInterval(idTime);
        };
    }, [isStarting]);

    /*---------- Start wheel if done countdown ----------*/
    useEffect(() => {
        const secondary = new Date().getSeconds();
        if (secondary == 0 || secondary % timeCounter === 0) {
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
