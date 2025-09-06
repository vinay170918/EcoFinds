import { useState } from "react";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Laptop", price: "₹50,000" },
    { id: 2, name: "Mobile", price: "₹15,000" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">My Cart</h2>
      <ul className="list-group">
        {cartItems.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between">
            {item.name} <span>{item.price}</span>
          </li>
        ))}
      </ul>
      <button className="btn btn-success w-100 mt-3">Checkout</button>
    </div>
  );
}
