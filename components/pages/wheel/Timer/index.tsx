import React, { memo, useEffect, useState } from 'react';
import style from './Timer.module.scss';

interface props {
    onStart: () => void;
    isStarting: boolean;
}

function Timer({ onStart, isStarting }: props) {
    const initialTime = 1;
    const [timer, setTimer] = useState<number>(initialTime);

    /*---------- Count down start wheel ----------*/
    useEffect(() => {
        if (!isStarting) {
            let idTime = setInterval(() => {
                setTimer((prev: number) => {
                    if (prev <= 0) {
                        return !isStarting ? initialTime : 0;
                    }
                    return prev - 1;
                });
            }, 1000);
            return () => {
                clearInterval(idTime);
            };
        }
    }, [isStarting]);

    /*---------- Start wheel if done countdown ----------*/
    useEffect(() => {
        if (timer <= 0) {
            onStart();
        }
    }, [timer]);

    return <div className={style.main}>{timer}s</div>;
}

export default memo(Timer);
