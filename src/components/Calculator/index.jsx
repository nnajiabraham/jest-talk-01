import React, { Component } from 'react';
import './style.css';
import { add, minus, times, divide, percent } from '../../utils/math';

class Calculator extends Component {
  state = {
    current: '',
    previous: null,
    operator: null,
    operatorClicked: false,
  };

  append = (number) => {
    const { current, operatorClicked } = this.state;

    if (operatorClicked) {
      this.setState({ current: `${number}`, operatorClicked: false });
    } else {
      this.setState({ current: `${current}${number}` });
    }
  };

  clear = () => this.setState({ current: '' });

  dot = () => {
    const { current } = this.state;
    if (current.indexOf('.') === -1) {
      this.append('.');
    }
  };

  setPrevious = () => {
    const { current } = this.state;
    this.setState({ previous: current, operatorClicked: true });
  };

  callAdd = () => {
    this.setState({ operator: add });
    this.setPrevious();
  };

  callMinus = () => {
    this.setState({ operator: minus });
    this.setPrevious();
  };

  callTimes = () => {
    this.setState({ operator: times });
    this.setPrevious();
  };

  callDivide = () => {
    this.setState({ operator: divide });
    this.setPrevious();
  };

  percent = () => {
    const { current } = this.state;
    if (current) {
      this.setState({ current: `${percent(current)}` });
    }
  };

  sign = () => {
    const { current } = this.state;
    const currentNewValue = current.charAt(0) === '-' ? current.slice(1) : `-${current}`;
    this.setState({ current: currentNewValue });
  };

  equal = () => {
    const { current, operator, previous } = this.state;
    const calculation = `${operator(
      parseFloat(previous),
      parseFloat(current)
    )}`;

    this.setState({
      current: calculation,
      previous: null,
    });
  };

  render() {
    const { current } = this.state;

    return (
      <div className="calculator">
        <div className="display">{current || '0'}</div>

        <div className="btn" onClick={this.clear}>C</div>
        <div className="btn" onClick={this.sign}>+/-</div>
        <div className="btn" onClick={this.percent}>%</div>
        <div className="btn operator" onClick={this.callDivide}>÷</div>

        <div className="btn" onClick={() => this.append('7')}>7</div>
        <div className="btn" onClick={() => this.append('8')}>8</div>
        <div className="btn" onClick={() => this.append('9')}>9</div>
        <div className="btn operator" onClick={this.callTimes}>x</div>

        <div className="btn" onClick={() => this.append('4')}>4</div>
        <div className="btn" onClick={() => this.append('5')}>5</div>
        <div className="btn" onClick={() => this.append('6')}>6</div>
        <div className="btn operator" onClick={this.callMinus}>-</div>

        <div className="btn" onClick={() => this.append('1')}>1</div>
        <div className="btn" onClick={() => this.append('2')}>2</div>
        <div className="btn" onClick={() => this.append('3')}>3</div>
        <div className="btn operator" onClick={this.callAdd}>+</div>

        <div className="btn zero" onClick={() => this.append('0')}>0</div>
        <div className="btn" onClick={this.dot}>.</div>
        <div className="btn operator" onClick={this.equal}>=</div>
      </div>
    );
  }
};

export default Calculator;
