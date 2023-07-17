import React from "react";

const Button = ({ title, customClass, actionHandler, buttonType }) => {
  return (
    <button
      type={buttonType}
      onClick={actionHandler}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${customClass}`}
    >
      {title}
    </button>
  );
};

export default Button;
