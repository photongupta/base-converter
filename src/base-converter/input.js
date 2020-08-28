import React from 'react';

const Input = function ({number, onChange, base}) {
  const value = number ? number.toString(base) : number;
  return (
    <div>
      <label>Base {base} </label>
      <input
        onChange={({target}) => onChange(target.value, base)}
        value={value}
        className="inputBox"
      />
    </div>
  );
};

export default Input;
