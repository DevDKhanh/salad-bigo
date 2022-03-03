import React, { useEffect, useState } from 'react';
import Control from '../components/pages/wheel/Control';
import InfoCoin from '../components/pages/wheel/InfoCoin';
import ItemWheel from '../components/pages/wheel/ItemWheel';
import NavBottom from '../components/pages/wheel/NavBottom';
import Timer from '../components/pages/wheel/Timer';
import RequiredAuth from '../components/protected/RequiredAuth';
import { listItemBet } from '../constants/mock/test';
import style from '../styles/Home.module.scss';

function WheelPage() {
    const [currentItem, setCurrentItem] = useState<number>(0);
    const [isStarting, setIsStarting] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    /*---------- Effect active item ----------*/
    useEffect(() => {
        if (!isStarting) {
            let idTime = setInterval(() => {
                setCurrentItem((prev: number) => {
                    if (prev >= 7) {
                        return 0;
                    }
                    return prev + 1;
                });
            }, 1000);
            return () => {
                clearInterval(idTime);
            };
        }
    }, [isStarting]);

    /*---------- Start wheel ----------*/
    const handleStart = () => {
        if (!isStarting) {
            setIsStarting(true);
            let countDown = 45;
            let timer = setInterval(() => {
                if (countDown <= -15) {
                    setIsStarting(false);
                    setMessage('');
                    clearInterval(timer);
                }
                if (countDown === 0) {
                    const gift = Math.floor(Math.random() * listItemBet.length);
                    setCurrentItem(gift);
                    setMessage(`Phần quà x${listItemBet[gift].winTimes}`);
                }
                if (countDown > 0) {
                    setCurrentItem((prev: number) => {
                        if (prev >= 7) {
                            return 0;
                        }
                        return prev + 1;
                    });
                }
                countDown--;
            }, 100);
        }
    };

    return (
        <RequiredAuth>
            <div className={style.mainWheel}>
                {/********** Count down **********/}
                <Timer onStart={handleStart} isStarting={isStarting} />
                {/*********** End ***********/}
                {/***********  List item ***********/}
                <div className={style.listItem}>
                    {listItemBet.map((item, index) => {
                        return (
                            <ItemWheel
                                key={item.id}
                                img={item.img}
                                isStarting={isStarting}
                                winTimes={item.winTimes}
                                isActive={currentItem === index}
                            />
                        );
                    })}
                </div>
                {/*********** End ***********/}
            </div>
            <Control />
            <InfoCoin />
            <NavBottom />
            {message !== '' && <h2 className={style.message}>{message}</h2>}
        </RequiredAuth>
    );
}

export default WheelPage;
