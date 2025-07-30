import { useReducer } from "react";
import "./App.css";
import { useState } from "react";
const initialState = [
  {
    id: 1,
    name: "Reading",
  },
];

function Reducer(state, action) {
  switch (action.type) {
    case "ADD-TASK":
      return [...state, { id: state.length + 1, name: action.payload }];
    case "DELETE-TASK":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

function App() {
  const [todo, dispatch] = useReducer(Reducer, initialState);
  const [text, setText] = useState("");

  const handleTask = (e) => {
    if (e.key === "Enter") {
      dispatch({ type: "ADD-TASK", payload: e.target.value });
    }
  };

  const handleAdd = () => {
    dispatch({ type: "ADD-TASK", payload: text });
  };

  const handleDelete = (id) => {
    dispatch({ type: "DELETE-TASK", payload: id });
  };

  return (
    <div className="todo">
      <h1>Todo List {todo.length}</h1>
      <label htmlFor="task">Enter Your Task:</label>
      <input
        type="text"
        id="task"
        onKeyDown={(e) => {
          handleTask(e);
        }}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button onClick={handleAdd}>Add task</button>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>
            {item.name}
            <button
              onClick={() => {
                handleDelete(item.id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
