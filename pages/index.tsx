import Link from 'next/link';
import React, { memo, useEffect, useRef, useState } from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';

import { RootState } from '../redux/reducers';
import Control from '../components/pages/wheel/Control';
import HeaederInfo from '../components/pages/wheel/HeaederInfo';
import InfoCoin from '../components/pages/wheel/InfoCoin';
import ItemWheel from '../components/pages/wheel/ItemWheel';
import NavBottom from '../components/pages/wheel/NavBottom';
import Timer from '../components/pages/wheel/Timer';
import WinPopup from '../components/pages/wheel/WinPopup';
import RequiredAuth from '../components/protected/RequiredAuth';
import style from '../styles/Home.module.scss';

function WheelPage() {
    const countDownId: any = useRef();
    const [currentItem, setCurrentItem] = useState<number>(0);
    const [isStarting, setIsStarting] = useState<boolean>(false);
    const [result, setResult] = useState<any>(null);

    const { listWheel } = useSelector((state: RootState) => state.wheel);
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
            countDownId.current = setInterval(() => {
                if (countDown <= -15) {
                    setIsStarting(false);
                    clearInterval(countDownId.current);
                }
                if (countDown === 0) {
                    const gift = Math.floor(Math.random() * listWheel.length);
                    setCurrentItem(gift);
                    setResult(gift);
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
    useEffect(() => () => clearInterval(countDownId.current), []);

    return (
        <RequiredAuth>
            <div className={style.container}>
                <HeaederInfo />
                <div className={style.mainWheel}>
                    {/********** Count down **********/}
                    <Timer onStart={handleStart} isStarting={isStarting} />
                    {/*********** End ***********/}
                    {/***********  List item ***********/}
                    <div className={style.listItem}>
                        {listWheel.map((item: any, index: number) => {
                            return (
                                <ItemWheel
                                    key={item.id}
                                    img={item.image}
                                    isStarting={isStarting}
                                    winTimes={item.rate}
                                    isActive={currentItem === index}
                                />
                            );
                        })}
                    </div>
                    {/*********** End ***********/}
                </div>
                <Control />
                <InfoCoin />
                <Link href="/wheel/history">
                    <a className={style.linkHistory}>
                        Lịch sử
                        <span className={style.icon}>
                            <RiArrowRightSLine />
                        </span>
                    </a>
                </Link>
                <NavBottom />
                {result && (
                    <WinPopup result={result} onClose={() => setResult(null)} />
                )}
            </div>
        </RequiredAuth>
    );
}

export default memo(WheelPage);
