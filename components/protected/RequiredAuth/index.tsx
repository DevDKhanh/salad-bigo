//**********************
//* COMPONENT PROTECTED SCREEN NOT LOGGED
//**********************

import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/reducers';

interface props {
    children: React.ReactNode;
}

function RequiredAuth({ children }: props) {
    const router = useRouter();
    const { isLogged } = useSelector((state: RootState) => state.auth);
    const { isLoading } = useSelector((state: RootState) => state.interface);

    /********** redirect login when user not logged  **********/
    if (!isLogged && !isLoading) {
        router.replace(`/auth/login`);
    }

    if (isLogged && !isLoading) {
        return <>{children}</>;
    }

    return <div className="loading-page"></div>;
}

export default RequiredAuth;
