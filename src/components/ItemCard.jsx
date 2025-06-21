import React from "react";
import { Link } from "react-router-dom";
export default function ItemCard({ item }) {
  return (
    <Link to={`/item/${item.id}`}>
      <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition max-w-sm">
        <img src={item.imageUrl} alt={item.title} className="h-48 w-full object-cover rounded" />
        <h3 className="font-bold text-lg mt-2">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.category}</p>
        <p className="text-purple-600 font-semibold mt-1">₹{item.price}</p>
      </div>
    </Link>
  );
}
