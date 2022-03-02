import React from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentBet } from '../../../../redux/actions/user';
import { RootState } from '../../../../redux/reducers';
import style from './Control.module.scss';

function Control() {
    const { currentBet } = useSelector((state: RootState) => state.user);
    const dispatch = useDispatch();
    return (
        <div className={style.main}>
            <h4 className={style.note}>
                Choose the amount of wager &gt; choose food
            </h4>
            <div className={style.mainBet}>
                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 100 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(100))}
                >
                    100
                </div>
                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 200 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(200))}
                >
                    200
                </div>

                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 500 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(500))}
                >
                    500
                </div>
                <div
                    className={clsx([
                        style.btnBet,
                        { [style.active]: currentBet === 1000 },
                    ])}
                    onClick={() => dispatch(setCurrentBet(1000))}
                >
                    1000
                </div>
            </div>
        </div>
    );
}

export default Control;
