import React from "react";

const Card = ({ data }) => {
  return (
    <div className="w-[370px] px-6 py-8 border border-blue-100 rounded-md shadow-gray-300 shadow-md">
      <div className="flex justify-center py-6">{data.icon}</div>
      <div className="text-center">
        <h2 className="text-xl font-bold">{data.title}</h2>
        <p className="text-gray-600 mt-2">
          {data.details.substring(0, 155)} ...
        </p>
      </div>
    </div>
  );
};

export default Card;
