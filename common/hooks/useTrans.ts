import { useRouter } from 'next/router';
import en from '../../public/lang/en';
import vi from '../../public/lang/vi';

const useTrans = () => {
    const { locale } = useRouter();
    const t: any = {
        vi,
        en,
    };
    const trans = t[`${locale}`];
    return trans;
};

export default useTrans;
