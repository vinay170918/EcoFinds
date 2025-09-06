import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export default function Products() {
  const products = [
    { id: 1, name: "Laptop", price: "₹50,000" },
    { id: 2, name: "Mobile", price: "₹15,000" },
    { id: 3, name: "Headphones", price: "₹2,000" },
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Products</h2>
      <div className="row">
        {products.map((p) => (
          <div key={p.id} className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{p.name}</h5>
                <p className="card-text">{p.price}</p>
                <button className="btn btn-primary w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
