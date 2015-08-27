import React, { Component, PropTypes } from 'react';

export default class Cell extends Component {
    handleClick() {
        this.props.onCellClick(this.props.index);
    }
    render() {
        var cellClass = 'cell ';
        var iconClass = 'fa ';

        if (this.props.symbol) {
            cellClass += 'cell-'+this.props.symbol;
            iconClass += this.props.symbol == 'O' ? 'fa-circle-o' : 'fa-times';
        } else {
            iconClass += this.props.turn == 'O' ? 'fa-circle-o' : 'fa-times';
        }

        return (
            <div className={cellClass} onClick={this.handleClick.bind(this)}>
                <i className={iconClass}></i>
            </div>
        );
    }

}
