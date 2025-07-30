import { useState } from "react";

const Todo = () => {
  const [task, setTask] = useState([]);

  const handleAdd = (itemName) => {
    setTask([...task, { id: task.length + 1, name: itemName }]);
  };

  const handleDelete = (id) => {
    setTask(task.filter((item) => item.id !== id));
  };

  const handleUpdate = (itemName, id) => {
    setTask(
      task.map((item) => (item.id === id ? { ...item, name: itemName } : item))
    );
  };
  return (
    <div>
      <h1>Todo List {task.length}</h1>
      <p>Click the button below to Add items into the cart</p>
      <button
        onClick={() => {
          handleAdd(prompt("Enter Item name"));
        }}
      >
        Add Items
      </button>
      {task.map((item) => (
        <li key={item.id}>
          {item.name}
          <button
            onClick={() => {
              handleDelete(item.id);
            }}
          >
            Delete Item
          </button>
          <button
            onClick={() => {
              handleUpdate(prompt("Enter Item name", item.name), item.id);
            }}
          >
            Update Item
          </button>
        </li>
      ))}
    </div>
  );
};

export default Todo;
