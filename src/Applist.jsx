import React, { useRef, useState } from "react";
import "./App.css";

export default function Applist({ setList, lists }) {
  const nameRef = useRef();
  const priceRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    if(!name || !price) {
        alert('Name or price is empty!')
        return;
    }
    const newList = {
      id: lists.length + 1,
      name,
      price,
    };
    setList((prevlist) => {
      return prevlist.concat(newList);
    });
    nameRef.current.value = "";
    priceRef.current.value = "";
  }

  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Enter name" ref={nameRef} />
      <input
        type="text"
        name="price"
        placeholder="Enter price"
        ref={priceRef}
      />
      <button type="submit">Add</button>
    </form>
  );
}
