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
    this.state = {value: 0};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value, base) {
    if (doesBelongToBase(value, base)) {
      this.setState(() => ({value: parseInt(value, 10), base}));
    }
  }

  render() {
    const baseList = Array.from(Array(this.props.lastBase - 1).keys());
    const inputBoxes = baseList.map((id) => (
      <Input
        key={id}
        number={this.state.value}
        base={id + 2}
        onChange={this.handleChange}
      />
    ));
    return <div>{inputBoxes}</div>;
  }
}

export default BaseConverter;
