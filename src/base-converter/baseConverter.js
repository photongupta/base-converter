import React from 'react';
import Input from './input';

class BaseConverter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', base: null};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({target}, base) {
    if (
      target.value
        .split('')
        .every((digit) => Number.isInteger(parseInt(digit, base)))
    ) {
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
