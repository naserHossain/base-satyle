import React from "react";
import { Button2, Button3 } from "./Button";

class Counter extends React.Component {
    baseValue = { value: 0 };
    increment = () => {
        this.setState({ value: (this.baseValue.value += 1) });
    };
    decrement = () => {
        if (!this.baseValue.value <= 0) {
            this.setState({ value: (this.baseValue.value -= 1) });
        }
    };
    render() {
        return (
            <div>
                <h1>Calculation</h1>
                <h2>{this.baseValue.value}</h2>
                <Button2 onClick={this.increment}>inc</Button2>
                <Button3 onClick={this.decrement}>Dec</Button3>
            </div>
        );
    }
}
export default Counter;
