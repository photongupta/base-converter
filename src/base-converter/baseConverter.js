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
      this.setState(() => ({value: target.value, base}));
    }
  }

  render() {
    const baseList = Array.from(Array(this.props.lastBase).keys());
    const inputBoxes = baseList.map((id) => (
      <Input
        key={id}
        currentInput={this.state}
        base={id + 2}
        onChange={this.handleChange}
      />
    ));
    return <div>{inputBoxes}</div>;
  }
}

export default BaseConverter;
