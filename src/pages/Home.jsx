import React from "react";

import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchItems = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItems(data);
    };
    fetchItems();
  }, []);

  const filteredItems = items.filter((item) => {
    const matchSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    return matchSearch && matchCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Browse Listings</h1>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search items..."
          className="input"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select className="input" onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Books">Books</option>
          <option value="Uniforms">Uniforms</option>
          <option value="Lab Coats">Lab Coats</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ItemCard key={item.id} item={item} />)
        ) : (
          <p className="text-gray-500">No items found.</p>
        )}
      </div>
    </div>
  );
}
