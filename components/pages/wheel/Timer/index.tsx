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
    const [timer, setTimer] = useState<number>(-1);

    /*---------- Count down start wheel ----------*/
    useEffect(() => {
        let idTime = setInterval(() => {
            if (!isStarting) {
                if (userData.rotation_time) {
                    /*===========> GET TIME <==========*/
                    const distance =
                        userData.rotation_time + 45000 - new Date().getTime();
                    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    /*===========> SET COUNT DOWN  <==========*/
                    if (seconds <= 0) {
                        return setTimer(0);
                    } else {
                        setTimer(seconds);
                    }
                }
            }
        }, 10);
        return () => {
            clearInterval(idTime);
        };
    }, [isStarting, userData.rotation_time]);

    /*---------- Start wheel if done countdown ----------*/
    useEffect(() => {
        if (timer == 0 && userData.rotation_time) {
            onStart();
        }
    }, [timer, userData.rotation_time]);

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
