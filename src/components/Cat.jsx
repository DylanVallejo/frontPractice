
import React from 'react';
// import Dog from './Dog';

class Cat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { sleeping: true };
    }
    render() {
        return (
        <div>
            <p>{`The cat is ${this.state.sleeping ? 'sleeping' : 'eating'}`}</p>
            {/* <Dog timeToEat={this.state.timeToEat}/> */}
            <button onClick={() => this.setState({ sleeping: false })}>
            Wake up!
            </button>
            <button onClick={() => this.setState({ sleeping: true })}>
            sleeping
            </button>
        </div>
        );
    }
}
export default Cat;
