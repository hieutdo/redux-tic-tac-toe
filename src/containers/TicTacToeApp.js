import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions/tictactoe';
import { Board, Menu } from '../components';

@connect(state => ({
    tictactoe: state.tictactoe
}))
export default class TicTacToeApp extends Component {
    render() {
        const { tictactoe: {board: board, turn: turn, winner: winner}, dispatch } = this.props;
        const actions = bindActionCreators(Actions, dispatch);

        return (
            <Board board={board} turn={turn} winner={winner} {...actions}/>
        );
    }
}
