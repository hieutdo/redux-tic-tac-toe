import * as types from '../constants/ActionTypes';
import _ from 'lodash';

const initialState = {
    board: [
        '', '', '',
        '', '', '',
        '', '', ''
    ],
    turn: 'O',
    winner: 'n'
};

function checkWinner(board) {
    var check = function(a,b,c) {
        return !!(a + b + c).match(/^(xxx|ooo)$/gi);
    };

    if (check(board[0], board[1], board[2])) return board[0];
    if (check(board[3], board[4], board[5])) return board[3];
    if (check(board[6], board[7], board[8])) return board[6];

    if (check(board[0], board[3], board[6])) return board[0];
    if (check(board[1], board[4], board[7])) return board[1];
    if (check(board[2], board[5], board[8])) return board[2];

    if (check(board[0], board[4], board[8])) return board[0];
    if (check(board[2], board[4], board[6])) return board[2];

    if (board.join('').length === 9) return 'd';
    return 'n';
}

export default function tictactoe(state = initialState, action) {
    switch (action.type) {
        case types.SET_SYMBOL:
            if (!state.board[action.index] && state.winner === 'n') {
                const newBoard = _.cloneDeep(state.board);
                newBoard[action.index] = action.symbol;
                return {
                    ...state,
                    board: newBoard,
                    turn: action.symbol === 'O' ? 'X' : 'O',
                    winner: checkWinner(newBoard)
                };
            }
            return state;
        case types.RESET_GAME:
            return {
                ...initialState
            };
        default:
            return state;
    }
}
