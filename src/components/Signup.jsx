import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, "users", userCredential.user.uid), {
        username,
        email
      });
      setMsg("✅ Signup successful! Please login.");
    } catch (err) {
      setMsg("❌ " + err.message);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSignup} className="flex flex-col gap-3">
        <input className="border p-2 rounded" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
        <input className="border p-2 rounded" placeholder="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <input className="border p-2 rounded" placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700">Sign Up</button>
      </form>
      {msg && <p className="mt-3 text-sm">{msg}</p>}
    </div>
  );
}
