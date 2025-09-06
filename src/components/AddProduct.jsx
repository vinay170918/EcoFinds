import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [msg, setMsg] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "products"), {
        name,
        price,
        sellerId: auth.currentUser.uid,
        createdAt: serverTimestamp()
      });
      setMsg("✅ Product added!");
      setName(""); setPrice("");
    } catch (err) {
      setMsg("❌ " + err.message);
    }
  };

   return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Add Product</h2>
      <form className="p-4 border rounded shadow bg-white">
        <input type="text" placeholder="Product Name" className="form-control mb-3" />
        <input type="number" placeholder="Price" className="form-control mb-3" />
        <textarea placeholder="Description" className="form-control mb-3"></textarea>
        <button className="btn btn-success w-100">Add Product</button>
      </form>
    </div>
  );

}
