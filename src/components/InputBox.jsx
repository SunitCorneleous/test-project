import React from "react";

const InputBox = ({ customClass, type, required, placeholder, name }) => {
  return (
    <input
      name={name}
      required={required}
      type={type}
      placeholder={placeholder}
      className={`border-2 border-gray-300 rounded-md px-3 py-2 text-lg outline-none ${customClass}`}
    />
  );
};

export default InputBox;
