import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PostItem from "./pages/PostItem";
import ItemDetails from "./pages/ItemDetails";

export default function App() {
  return (
    <Router>
      <nav className="p-4 bg-white shadow flex justify-between">
        <Link to="/" className="text-xl font-bold">LoopedIn</Link>
        <Link to="/post" className="bg-purple-600 text-white px-4 py-2 rounded-xl">Post Item</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<PostItem />} />
        <Route path="/item/:id" element={<ItemDetails />} />
      </Routes>
    </Router>
  );
}
