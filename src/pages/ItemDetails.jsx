import React from "react";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { doc, getDoc } from "firebase/firestore";

export default function ItemDetails() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getItem = async () => {
      const docRef = doc(db, "items", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setItem(docSnap.data());
      }
    };
    getItem();
  }, [id]);

  return (
    <div className="p-6 max-w-xl mx-auto">
      {item ? (
        <>
          <img src={item.imageUrl} className="w-full h-64 object-cover rounded-xl" />
          <h1 className="text-3xl font-bold mt-4">{item.title}</h1>
          <p className="text-gray-500">{item.category}</p>
          <p className="mt-2">{item.description}</p>
          <p className="text-purple-600 font-semibold text-xl mt-2">₹{item.price}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
