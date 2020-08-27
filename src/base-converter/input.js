import React from 'react';

const Input = function ({currentInput, base, onChange}) {
  const value = currentInput.value
    ? parseInt(currentInput.value, currentInput.base).toString(base)
    : currentInput.value;
  return (
    <input
      onChange={(event) => onChange(event, base)}
      base={base}
      value={value}
    />
  );
};

export default Input;
