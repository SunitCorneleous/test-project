import React from "react";
import Loader from "./../assets/spinner.svg";

const Button = ({ title, customClass, actionHandler, buttonType, loading }) => {
  let content = title;

  if (loading) {
    content = <img src={Loader} className="w-full h-6" />;
  } else {
    content = title;
  }

  return (
    <button
      type={buttonType}
      onClick={actionHandler}
      className={`${
        loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
      } text-white font-bold py-2 px-4 rounded ${customClass}`}
    >
      {content}
    </button>
  );
};

export default Button;
