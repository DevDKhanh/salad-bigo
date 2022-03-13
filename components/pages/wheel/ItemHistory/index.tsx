import React from 'react';
import Image from 'next/image';
import icons from '../../../../constants/images/icon';
import style from './ItemHistory.module.scss';
import { useConvertDate } from '../../../../common/hooks/useConvertDate';
/*===========> INTERFACE <==========*/
interface item {
    rotation_code: string;
    user_code: string;
    rotation_time: number;
    image: string;
    coinBet: number;
    coinWin: number;
}

/*===========> MAIN COMPONENT <==========*/
function ItemHistory({ data }: { data: item }) {
    const convertDate = useConvertDate;

    return (
        <div className={style.main}>
            <div className={style.title}>
                <span>Rotation lucky đã chọn</span>
                <span className={style.icon}>
                    <Image src={icons.dish1} alt={data.image} layout="fill" />
                </span>
            </div>
            <div className={style.bet}>
                <div className={style.item}>
                    <div
                        style={{ color: data.coinWin ? '#199250' : '#CC3131' }}
                    >
                        {data.coinWin ? 'Chiến thắng' : 'Thua cược'}:
                    </div>
                    <div className={style.coin}>
                        <span className={style.iconIcon}>
                            <Image
                                src={icons.coin}
                                alt={'coin'}
                                layout="fill"
                            />
                        </span>
                        {data.coinWin}
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
                        {data.coinBet}
                    </div>
                </div>
            </div>
            <time>
                {convertDate(data.rotation_time).getTime()}{' '}
                {convertDate(data.rotation_time).getDate()}
            </time>
        </div>
    );
}

export default ItemHistory;
