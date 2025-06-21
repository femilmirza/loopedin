import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";

export default function PostForm() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: null,
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🟢 Form submitted");

    try {
      // Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", form.image);
      formData.append("upload_preset", "loopedin_unsigned");

      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dnzta1pjl/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      const imageUrl = data.secure_url;

      // Save item in Firestore
      await addDoc(collection(db, "items"), {
        title: form.title,
        description: form.description,
        price: form.price,
        category: form.category,
        imageUrl,
      });

      alert("✅ Item posted successfully!");
      navigate("/");
    } catch (err) {
      console.error("❌ Error posting item:", err);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 max-w-md mx-auto p-4 bg-white shadow rounded-xl"
    >
      <input
        type="text"
        placeholder="Title"
        className="w-full border p-2 rounded"
        required
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        placeholder="Description"
        className="w-full border p-2 rounded"
        required
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        type="number"
        placeholder="Price"
        className="w-full border p-2 rounded"
        required
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />
      <select
        className="w-full border p-2 rounded"
        required
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      >
        <option value="">Select Category</option>
        <option value="Books">Books</option>
        <option value="Uniforms">Uniforms</option>
        <option value="Lab Coats">Lab Coats</option>
        <option value="Others">Others</option>
      </select>
      <input
        type="file"
        required
        onChange={(e) => setForm({ ...form, image: e.target.files[0] })}
      />
      <button
        type="submit"
        className="bg-purple-600 text-white w-full py-2 rounded hover:bg-purple-700 transition"
      >
        Post Item
      </button>
    </form>
  );
}
