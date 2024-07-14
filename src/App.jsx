import React, { useState } from "react";
import Applist from "./Applist";
import EditList from "./EditList";
import "./App.css";

const list = [
  {
    id: 1,
    name: "Ayam",
    price: "60000",
  },
  {
    id: 2,
    name: "RTX 4060",
    price: "5.979.000",
  },
];

export default function App() {
  const [lists, setList] = useState(list);
  const [updateState, setUpdateState] = useState(-1);
  return (
    <div class="crud">
      <div>
        <h1>SIMPLE CRUD</h1>
        <Applist setList={setList} lists={lists} />
        <form onSubmit={handleSubmit}>
          <table>
            {lists.map((current) =>
              updateState === current.id ? (
                <EditList current={current} lists={lists} setList={setList} />
              ) : (
                <tr>
                  <td>{current.name}</td>
                  <td>{current.price}</td>
                  <td>
                    <button
                      className="edit"
                      onClick={() => handleEdit(current.id)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete"
                      type="button"
                      onClick={() => handleDelete(current.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              )
            )}
          </table>
        </form>
      </div>
    </div>
  );

  function handleEdit(id) {
    setUpdateState(id);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    const price = event.target.elements.price.value;
    const newList = lists.map((li) =>
      li.id === updateState ? { ...li, name: name, price: price } : li
    );

    setList(newList);
    setUpdateState(-1);
  }

  function handleDelete(id) {
    const newList = lists.filter((li) => li.id !== id);
    setList(newList);
  }
}
