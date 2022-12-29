//mas menos reset

// import React from 'react';

// class Contador extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//     }
//     render() {
//         return (
//         <div>
//             <p>{`The count is ${this.state.count}`}</p>
//             <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//             Increment
//             </button>
//             <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//             decrement
            
//             </button>
//             <button onClick={() => this.setState({ count: this.state.count = 0 })}>
//             zero
//             </button>
//         </div>
//         );
//     }
// }

// export default Contador;


import { useState } from "react"
const Counter = () => {
    
    const [contador, setContador] = useState(0)
    
    const handleCount = () => { 
        setContador(contador+1)
    }
    const handleCountRest = () => { 
        setContador(contador-1)
    }
    const handleCountReset = () => { 
        setContador(0)
    }
    return (
        <div>
            <h2>Cuenta: {contador}</h2>
            <button onClick={handleCount}>
                sumar
            </button>
            <button onClick={handleCountRest}>
                restar 
            </button>
            <button onClick={handleCountReset}>
                reset
            </button>
        </div>
      );
}
 
export default Counter;
