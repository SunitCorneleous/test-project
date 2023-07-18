import React from "react";

const InputBox = ({
  customClass,
  type,
  placeholder,
  name,
  register,
  error,
}) => {
  return (
    <div className="flex flex-col">
      <input
        {...register}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`border-2 border-gray-300 rounded-md px-3 py-2 text-lg outline-none ${customClass}`}
      />
      {error && (
        <span className="text-xs font-medium text-red-600">{error}</span>
      )}
    </div>
  );
};

export default InputBox;
