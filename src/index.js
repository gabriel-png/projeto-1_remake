import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { render } from 'react-dom';

class Button extends Component {
    static defaultProps = {
        children: 'Guardar',
    };
    
    static propTypes = {
        onClick: PropTypes.func.isRequired,
        children: PropTypes.string,
    };

    render() {
        return (
        <a href="" onClick={this.props.onClick}>
         {this.props.children}
        </a>
        );
    }
}

class App extends Component {
    handleClick(){
        alert("Opa, tudo salvo");
    }

    render() {
        return (
        <Fragment>
         <h1>Eae Seus Marvado, Tudo Emriba?</h1> 
         <Button onClick={this.handleClick}>Bora Guardar Esse Progresso</Button>
        </Fragment> 
        );
    }
}

render(<App />, document.getElementById('app'));