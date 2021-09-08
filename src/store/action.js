import { FLIP_CARD, RESTART_GAME } from './actionTypes';

export const flipCard = id => ({
    type : FLIP_CARD,
    id
})

export const restart = () => ({
    type : RESTART_GAME
})
