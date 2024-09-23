import React, { useState } from "react";

import fb from "../src/firebase";
const DB = fb.firestore();
const Blogslist = DB.collection("blogs");

const CreateBlog = () => {
  const [title, SetTitle] = useState("");
  const [body, SetBody] = useState("");

  const submit = (e) => {
    e.preventDefault();
    Blogs.add({
      Title: title,
      Body: body,
    })
      .then((docRef) => {
        alert("data successfully submit");
      })
      .catch((error) => {
        console.error("error:", error);
      });
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          submit(event);
        }}>
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            SetTitle(e.target.value);
          }}
          required
        />

        <textarea
          name="content"
          type="text"
          placeholder="write yoyr content here"
          rows="10"
          cols="150"
          onChange={(e) => {
            SetBody(e.target.value);
          }}
          required></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
