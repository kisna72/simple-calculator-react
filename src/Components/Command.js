import React from 'react';
import propTypes from 'prop-types';
import './Command.css';

class Command extends React.Component {
    static propTypes = {
        command: propTypes.oneOf(["+","-","*","/","=","C"]).isRequired,
        handleClick: propTypes.func.isRequired
    }
    render(){
        return(
            <div className="command" onClick={()=>this.props.handleClick(this.props.command)}>
                <div className="value">{this.props.command}</div>
            </div>
        )
    }
}

export default Command