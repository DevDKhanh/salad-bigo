import React from 'react';
import Image from 'next/image';
import { useSelector } from 'react-redux';

import backgrounds from '../../../../constants/images/background';
import icons from '../../../../constants/images/icon';
import { RootState } from '../../../../redux/reducers';
import style from './WinPopup.module.scss';

/*===========> INTERFACE <==========*/
interface props {
    result?: any;
    onClose: any;
}

/*===========> MAIN COMPONENT <==========*/
function WinPopup({ result, onClose }: props) {
    const { listWheel } = useSelector((state: RootState) => state.wheel);
    return (
        <div>
            <div className={style.overlay} onClick={onClose}></div>
            <div className={style.main} onClick={onClose}>
                <div className={style.table}>
                    <div className={style.imgWin}>
                        <img src={listWheel[result].image} alt="dish" />
                    </div>
                    <div className={style.mainInfo}>
                        <div className={style.img}>
                            <img src={backgrounds.nice.src} alt="win" />
                        </div>
                        <div>
                            <h3>Rotation lucky đã chọn Humburger</h3>
                            <div>
                                <div className={style.row}>
                                    <span className={style.label}>
                                        Bạn đã đặt:
                                    </span>
                                    <div className={style.listBet}>
                                        <div className={style.item}>
                                            <img
                                                src={icons.dish5.src}
                                                alt={'bet-item'}
                                            />
                                        </div>
                                        <div className={style.item}>
                                            <img
                                                src={icons.dish3.src}
                                                alt={'bet-item'}
                                            />
                                        </div>
                                        <div className={style.item}>
                                            <img
                                                src={icons.dish1.src}
                                                alt={'bet-item'}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={style.row}>
                                    <span className={style.label}>
                                        Chiến thắng:
                                    </span>
                                    <div className={style.coinNumber}>
                                        <span className={style.iconIcon}>
                                            <Image
                                                src={icons.coin}
                                                alt={'coin'}
                                                layout="fill"
                                            />
                                        </span>
                                        <span>1000</span>
                                    </div>
                                </div>
                                <div className={style.row}>
                                    <span className={style.label}>
                                        Đã đặt cược:
                                    </span>
                                    <div className={style.coinNumber}>
                                        <span className={style.iconIcon}>
                                            <Image
                                                src={icons.coin}
                                                alt={'coin'}
                                                layout="fill"
                                            />
                                        </span>
                                        <span>1000</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WinPopup;
