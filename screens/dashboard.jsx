import React from "react";
import Card from "../components/card";
import Table from "../components/table";

const Dashboard = () => {
  const products = [
    { id: 1, name: "Product 1", image: "/img1.jpg", description: "Description 1", rating: 4, price: 100 },
    { id: 2, name: "Product 2", image: "/img2.jpg", description: "Description 2", rating: 5, price: 150 },
  ];

  const users = [
    { id: 1, username: "user1", is_admin: true, is_staff: true, is_active: true },
    { id: 2, username: "user2", is_admin: false, is_staff: false, is_active: true },
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold my-4">Dashboard</h1>
      <h2 className="text-xl font-bold my-2">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            name={product.name}
            image={product.image}
            description={product.description}
            rating={product.rating}
            price={product.price}
            onRedirect={() => console.log(`Redirect to product ${product.id}`)}
          />
        ))}
      </div>
      <h2 className="text-xl font-bold my-4">Users</h2>
      <Table
        data={users}
        onRedirect={(id) => console.log(`Redirect to user ${id}`)}
      />
    </div>
  );
};

export default Dashboard;
