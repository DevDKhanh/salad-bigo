import React from 'react';
import Image from 'next/image';
import icons from '../../../../constants/images/icon';
import style from './ItemHistory.module.scss';

function ItemHistory() {
    return (
        <div className={style.main}>
            <div className={style.title}>
                <span>Rotation lucky đã chọn</span>
                <span className={style.icon}>
                    <Image src={icons.dish1} alt={'hinh anh'} layout="fill" />
                </span>
            </div>
            <div className={style.bet}>
                <div className={style.item}>
                    <div>Chiến thắng:</div>
                    <div className={style.coin}>
                        <span className={style.iconIcon}>
                            <Image
                                src={icons.coin}
                                alt={'coin'}
                                layout="fill"
                            />
                        </span>
                        1000
                    </div>
                </div>
                <div className={style.item}>
                    <div>Đã đặt cược:</div>
                    <div className={style.coin}>
                        <span className={style.iconIcon}>
                            <Image
                                src={icons.coin}
                                alt={'coin'}
                                layout="fill"
                            />
                        </span>
                        1000
                    </div>
                </div>
            </div>
            <time>20:00/ 28/02/2022</time>
        </div>
    );
}

export default ItemHistory;
