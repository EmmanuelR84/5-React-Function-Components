//La diferencia entre ClassComponent y FuncComponent es que en FuncComponent utilizamos menos codigo y es mas legible

import { Component } from "react";

class ClassComponent extends Component {
  constructor() {
    super()
    this.state = {
      contador: 0,
    }
  }

  render(){
    return <div>Class Component
      <p>
        <button onClick={ () => this.setState({ contador: this.state.contador - 1 }) } >-</button>
        {this.state.contador}
        <button onClick={ () => this.setState({ contador: this.state.contador + 1 }) } >+</button>
      </p>
    </div>
  }
};

export default ClassComponent;