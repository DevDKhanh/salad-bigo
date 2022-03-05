import React, { Fragment } from 'react';
import Button from '../../button/Button';
import style from './Popup.module.scss';

/*===========> INTERFACE <==========*/
interface props {
    onClose?: any;
    onYes?: any;
    isShow?: boolean;
    title: string;
    content: string;
}

/*===========> MAIN COMPONENT <==========*/
function Popup({ onClose, onYes, isShow, title, content }: props) {
    return (
        <Fragment>
            {isShow && (
                <div>
                    <div className={style.overlay} onClick={onClose}></div>
                    <div className={style.main} onClick={onClose}>
                        <div className={style.table}>
                            <h3 className={style.title}>{title}</h3>
                            <p className={style.content}>{content}</p>
                            <div className={style.btnGroup}>
                                <div className={style.btn} onClick={onClose}>
                                    Huỷ bỏ
                                </div>
                                <div className={style.btn} onClick={onYes}>
                                    Đồng ý
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </Fragment>
    );
}

export default Popup;
