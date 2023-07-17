import React from "react";

const TextBox = ({ customClass, placeholder }) => {
  return (
    <textarea
      placeholder={placeholder}
      cols="30"
      rows="5"
      className={`border-2 border-gray-300 rounded-md px-3 py-2 text-lg outline-none ${customClass}`}
    ></textarea>
  );
};

export default TextBox;
