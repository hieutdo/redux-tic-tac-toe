import * as types from '../constants/ActionTypes';

export function setSymbol(index, symbol) {
    return {
        type: types.SET_SYMBOL,
        index,
        symbol
    };
}

export function resetGame() {
    return {
        type: types.RESET_GAME
    };
}