"use client";
import { useState } from "react";

export default function SendPage() {
  const [form, setForm] = useState({ senderName: "", senderEmail: "", receiverName: "", receiverEmail: "", amount: "" });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Transaction submitted!");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow-md max-w-md mx-auto mt-10 text-black">
      <input name="senderName" placeholder="Sender Name" onChange={handleChange} required className="input" />
      <input name="senderEmail" placeholder="Sender Email" onChange={handleChange} required className="input" />
      <input name="receiverName" placeholder="Receiver Name" onChange={handleChange} required className="input" />
      <input name="receiverEmail" placeholder="Receiver Email" onChange={handleChange} required className="input" />
      <input name="amount" placeholder="Amount" type="number" onChange={handleChange} required className="input" />
      <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Send Money</button>
    </form>
  );
}
