import React from 'react';

const InputProfile = ({ type, value, name, disabled, width, onChange }) => {
  return (
    <div className={`w-${width} flex  flex-col gap-2 my-4 capitalize`}>
      <label htmlFor={name}>{name === 'lahir' ? 'Tanggal Lahir' : name}</label>
      <input
        type={type}
        onChange={onChange}
        name={name}
        id={name}
        value={value}
        disabled={disabled}
        className="appearance-none py-2 pl-3 border-bg-primary focus:ring-0  border-2 rounded-lg focus:outline-none "
        onClick={(e) => (e.target.name === 'password' ? e.target.value : (e.target.value = ''))}
      />
    </div>
  );
};

export default InputProfile;
