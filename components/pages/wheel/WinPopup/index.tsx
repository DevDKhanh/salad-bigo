import React, { memo } from 'react';
import Image from 'next/image';
import { setCoin } from '../../../../redux/actions/user';
import { useDispatch, useSelector } from 'react-redux';

import backgrounds from '../../../../constants/images/background';
import icons from '../../../../constants/images/icon';
import { RootState } from '../../../../redux/reducers';
import style from './WinPopup.module.scss';
import { getItemStorage } from '../../../../common/utils/localStorage';

/*===========> INTERFACE <==========*/
interface props {
    result?: any;
    onClose: any;
}

/*===========> MAIN COMPONENT <==========*/
function WinPopup({ result, onClose }: props) {
    return (
        <div>
            <div className={style.overlay} onClick={onClose}></div>
            <div className={style.main} onClick={onClose}>
                <div className={style.table}>
                    <div className={style.imgWin}>
                        <img src={result.winItem.image} alt="dish" />
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
                                        {result.listBet.map((item: any) => (
                                            <div
                                                key={item.id}
                                                className={style.item}
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={'bet-item'}
                                                />
                                            </div>
                                        ))}
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
                                        <span>{result.winCoin}</span>
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
                                        <span>{result.coinBet}</span>
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

export default memo(WinPopup);
