import React from 'react';
import NavAction from '../../components/pages/account/NavAction';
import OverImage from '../../components/pages/account/OverImage';
import RequiredAuth from '../../components/protected/RequiredAuth';

function Account() {
    return (
        <RequiredAuth>
            <OverImage isChange hrefBack="/" />
            <div className="page-main">
                <NavAction />
            </div>
        </RequiredAuth>
    );
}

export default Account;
