import React from "react";

import PostForm from "../components/PostForm";

export default function PostItem() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Post a New Item</h1>
      <PostForm />
    </div>
  );
}
