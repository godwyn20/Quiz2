import React from "react";

const Card = ({ name, image, description, rating, price, onRedirect }) => {
  const truncate = (str, num) =>
    str.length > num ? str.substring(0, num) + "..." : str;

  return (
    <div className="card border p-4 rounded-lg shadow-lg">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded" />
      <h2 className="font-bold text-lg mt-2">{name}</h2>
      <p className="text-sm text-gray-600">{truncate(description, 100)}</p>
      <div className="flex items-center mt-2">
        {/* Replace with Rating component */}
        <span className="text-yellow-500">⭐ {rating}</span>
      </div>
      <p className="font-bold mt-2">${price}</p>
      <button
        onClick={onRedirect}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
