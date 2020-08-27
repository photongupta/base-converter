import React from 'react';

const Input = function ({currentInput, base, onChange}) {
  const value = currentInput.value
    ? parseInt(currentInput.value, currentInput.base).toString(base)
    : currentInput.value;
  return (
    <div>
      <label>Base {base} </label>
      <input
        onChange={(event) => onChange(event, base)}
        base={base}
        value={value}
      />
    </div>
  );
};

export default Input;
