import React from 'react';

const Input = function ({currentInput, base, onChange}) {
  const {value: ipValue, base: ipBase} = currentInput;
  const value = ipValue ? parseInt(ipValue, ipBase).toString(base) : ipValue;
  return (
    <div>
      <label>Base {base} </label>
      <input
        onChange={({target}) => onChange(target.value, base)}
        value={value}
      />
    </div>
  );
};

export default Input;
