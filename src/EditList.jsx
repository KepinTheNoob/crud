export default function EditList({ current, lists, setList }) {
  function handInputname(event) {
    const value = event.target.value;
    const newList = lists.map((li) =>
      li.id === current.id ? { ...li, name: value } : li
    );

    setList(newList);
  }
  function handInputprice(event) {
    const value = event.target.value;
    const newList = lists.map((li) =>
      li.id === current.id ? { ...li, price: value } : li
    );

    setList(newList);
  }
  return (
    <tr>
      <td>
        <input
          type="text"
          onChange={handInputname}
          name="name"
          value={current.name}
        />
      </td>
      <td>
        <input
          type="text"
          onChange={handInputprice}
          name="price"
          value={current.price}
        />
      </td>
      <td>
        <button type="submit">Update</button>
      </td>
    </tr>
  );
}
