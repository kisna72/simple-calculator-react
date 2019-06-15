import React from 'react';
import propTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NumberBtn.css';

class NumberBtn extends React.Component{
    static propTypes = {
        value : propTypes.number.isRequired,
        handleClick:propTypes.func.isRequired
    }
    render(){
        return (
            <div className="number" onClick={()=>this.props.handleClick(this.props.value)}>
                <div className="value">{this.props.value}</div>
            </div>
        )
    }
}

export default NumberBtn