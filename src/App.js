import React from 'react';
import Number from './Components/Number';
import Command from './Components/Command';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';

class App extends React.Component {
  state = {
    previous_input:null, 
    current_input:null, //Keep track of what the number is. 
    current_operation:null,
  }

  handleNumberClick = (number)=>{
    const new_number = this.state.current_input * 10 + number 
    this.setState({
      current_input:new_number
    })
  }

  handleCommandClick = (command) => {
    let previous_input = null;
    let current_input = null;
    let current_operation = null ;

    if(command === "+"){

      current_input = null;
      previous_input = this.state.current_input;
      current_operation = "+";

    } else if(command === "*"){

      current_input = null;
      previous_input = this.state.current_input;
      current_operation = "*";

    } else if(command === "-"){

      current_input = null;
      previous_input = this.state.current_input;
      current_operation = "-";

    } else if(command==="/"){

      current_input = null;
      previous_input = this.state.current_input;
      current_operation = "/";

    } else if(command==="=") {
      
      if(this.state.current_operation === "+"){

        current_input = this.state.previous_input + this.state.current_input;

      }
      else if(this.state.current_operation === "-"){

        current_input = this.state.previous_input - this.state.current_input

      }
      else if(this.state.current_operation === "*"){

        current_input = this.state.previous_input * this.state.current_input

      }
      else if(this.state.current_operation === "/"){
        if(this.state.current_input === 0){
          current_input = +Infinity 
        } else {
          current_input = this.state.previous_input / this.state.current_input
        }

      }
      else {console.log("No current operation so no change.")}

    } else if(command==="C"){

      current_input=null; 
      previous_input=null; 
      current_operation=null;

    } else {
      console.log("Command Not Recognized")
    }
    
    this.setState({
      previous_input ,
      current_input,
      current_operation
    })
  }

  render(){
    return (
      <div className="container">
        <div>
          You entered: {this.state.current_input}
        </div>
        <Number handleClick={this.handleNumberClick} value={1}/>
        <Number handleClick={this.handleNumberClick} value={2}/>
        <Number handleClick={this.handleNumberClick} value={3}/>
        <Number handleClick={this.handleNumberClick} value={4}/>
        <Number handleClick={this.handleNumberClick} value={5}/>
        <Number handleClick={this.handleNumberClick} value={6}/>
        <Number handleClick={this.handleNumberClick} value={7}/>
        <Number handleClick={this.handleNumberClick} value={8}/>
        <Number handleClick={this.handleNumberClick} value={9}/>
        <Number handleClick={this.handleNumberClick} value={0}/>
        <Command handleClick={this.handleCommandClick} command="+"/>
        <Command handleClick={this.handleCommandClick} command="-"/>
        <Command handleClick={this.handleCommandClick} command="/"/>
        <Command handleClick={this.handleCommandClick} command="*"/>
        <Command handleClick={this.handleCommandClick} command="="/>
        <Command handleClick={this.handleCommandClick} command="C"/>
      </div>
    );
  }
}



export default App;
