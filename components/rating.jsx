import React from "react";

const Rating = ({ value }) => {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < value ? "★" : "☆"
  ).join("");

  return <span className="text-yellow-500">{stars}</span>;
};

export default Rating;
