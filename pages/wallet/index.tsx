import React from 'react';
import InfoWallet from '../../components/pages/wallet/InfoWallet';
import ItemHistoryWallet from '../../components/pages/wallet/ItemHistoryWallet';
import NavHistoryWallet from '../../components/pages/wallet/NavHistoryWallet';
import RequiredAuth from '../../components/protected/RequiredAuth';
import NavHeader from '../../components/widgets/NavHeader';
import style from './Wallet.module.scss';

function Wallet() {
    return (
        <RequiredAuth>
            <div className={style.container}>
                <NavHeader href={'/wheel'} title="Xu của tôi" />
                <InfoWallet />
                <NavHistoryWallet />
                <div className="page-main">
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                    <ItemHistoryWallet />
                </div>
            </div>
        </RequiredAuth>
    );
}

export default Wallet;
