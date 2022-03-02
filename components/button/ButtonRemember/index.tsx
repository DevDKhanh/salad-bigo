import clsx from 'clsx';
import { memo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useTrans from '../../../common/hooks/useTrans';
import { toggleRememberPassword } from '../../../redux/actions/auth';
import { RootState } from '../../../redux/reducers';
import style from './ButtonRemember.module.scss';

function ButtonRemember() {
    const trans = useTrans();
    const dispatch = useDispatch();
    const { isRemember } = useSelector((state: RootState) => state.auth);

    /********** toggle remember password **********/
    const handleToggle = () => {
        dispatch(toggleRememberPassword(!isRemember));
    };

    return (
        <div className={style.main}>
            <div
                className={clsx([style.btn, { [style.on]: isRemember }])}
                onClick={handleToggle}
            >
                <span className={clsx([style.switch])}></span>
            </div>
            <span>{trans.common.rememberPassword}</span>
        </div>
    );
}

export default memo(ButtonRemember);
