import React from "react";

const ProductScreen = ({ match }) => {
  const { id } = match.params;

  // Fetch product details by ID (mock for now)
  const product = {
    id,
    name: "Product 1",
    image: "/img1.jpg",
    description: "Detailed description",
    rating: 4,
    price: 100,
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-full max-w-md" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductScreen;
