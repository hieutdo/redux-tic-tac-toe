import React, { Component, PropTypes } from 'react';
import Cell from './Cell';

export default class Board extends Component {
    handleCellClick(index) {
        this.props.setSymbol(index, this.props.turn);
    }

    render() {
        var gameResult = '';
        if (this.props.winner === 'O' || this.props.winner === 'X') {
            gameResult = 'Player ' + this.props.winner + ' won!'
        } else if (this.props.winner === 'd') {
            gameResult = 'Draw game';
        }
        return (
            <div className="board">
                {
                    this.props.board.map((symbol, index) => {
                        return (<Cell
                            key={index}
                            index={index}
                            symbol={symbol}
                            onCellClick={this.handleCellClick.bind(this)}
                            />);
                    })
                }
                <div className="end" style={{display: this.props.winner === 'n' ? 'none' : 'block'}}>
                    <h2>{gameResult}</h2>
                    <button className="btn btn-primary" onClick={this.props.resetGame}>Reset Game</button>
                </div>
            </div>
        );
    }
}
