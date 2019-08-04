import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static defaultProps = {
        children: 'Guardar',
    };
    
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string,
    };

    render() {
        return (
        <button onClick={this.props.onClick}>
         {this.props.children}
        </button>
        );
    }
}