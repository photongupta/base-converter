import React from 'react';
import Input from './input';

const doesBelongToBase = function (number, base) {
  return number
    .split('')
    .every((digit) => Number.isInteger(parseInt(digit, base)));
};

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', base: null};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}, base) {
    if (doesBelongToBase(target.value, base)) {
      this.setState((state) => ({value: target.value, base}));
    }
  }

  render() {
    const baseList = Array.from(Array(15).keys());
    const inputs = baseList.map((_, index) => (
      <Input
        key={index}
        currentInput={this.state}
        base={index + 2}
        onChange={this.handleChange}
      />
    ));
    return <div>{inputs}</div>;
  }
}

export default BaseConverter;
