//**********************
//* COMPONENT PROTECTED SCREEN THEN LOGIN
//**********************

import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';

interface props {
    children: React.ReactNode;
}

function RequiredLogout({ children }: props) {
    const router = useRouter();
    const { isLogged } = useSelector((state: RootState) => state.auth);
    const { isLoading } = useSelector((state: RootState) => state.interface);

    /********** redirect home when user login  **********/
    if (isLogged && !isLoading) {
        router.replace(`/`);
    }

    if (!isLogged && !isLoading) {
        return <>{children}</>;
    }

    return <div className="loading-page"></div>;
}

export default RequiredLogout;
