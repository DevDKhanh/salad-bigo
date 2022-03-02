import icons from '../images/icon';

interface item {
    img: string;
    winTimes: number;
    id: number;
}

export const listItemBet: Array<item> = [
    {
        img: icons.dish1.src,
        winTimes: 5,
        id: 1,
    },
    {
        img: icons.dish2.src,
        winTimes: 10,
        id: 2,
    },
    {
        img: icons.dish3.src,
        winTimes: 15,
        id: 3,
    },
    {
        img: icons.dish4.src,
        winTimes: 20,
        id: 4,
    },
    {
        img: icons.dish5.src,
        winTimes: 25,
        id: 5,
    },
    {
        img: icons.dish6.src,
        winTimes: 30,
        id: 6,
    },
    {
        img: icons.dish3.src,
        winTimes: 35,
        id: 7,
    },
    {
        img: icons.dish4.src,
        winTimes: 40,
        id: 8,
    },
];
