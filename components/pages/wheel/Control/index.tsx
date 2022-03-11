import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentBet } from '../../../../redux/actions/user';
import { RootState } from '../../../../redux/reducers';
import style from './Control.module.scss';
import backgrounds from '../../../../constants/images/background';

function Control() {
    const { currentBet } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    return (
        <div className={style.main}>
            <div className={style.rotary}>
                <img src={backgrounds.rotary.src} alt="rotary" />
            </div>
            <h4 className={style.note}>
                Choose the amount of wager &gt; choose food
            </h4>
            <div className={style.mainBet}>
                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 10 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(10))}
                >
                    10
                </div>
                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 20 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(20))}
                >
                    20
                </div>

                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 50 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(50))}
                >
                    50
                </div>
                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 100 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(100))}
                >
                    100
                </div>
            </div>
        </div>
    );
}

export default Control;
