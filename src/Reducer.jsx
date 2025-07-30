import { useReducer } from "react";
import "./App.css";

import todo_img from "./assets/todo.png";

const initialState = [];

function Reduce(state, action) {
  switch (action.type) {
    case "ADD-TASK":
      return [...state, { id: state.length + 1, name: action.payload }];
    case "UPDATE-ITEM":
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...state, name: action.payload.newName }
          : item
      );
    case "DELETE-ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

const Reducer = () => {
  const [todo, dispatch] = useReducer(Reduce, initialState);
  return (
    <div className="todo-container">
      <img src={todo_img} alt="" height={150} width={150} />
      <h1>
        Todo List <span>{todo.length}</span>
      </h1>
      <button
        className="add"
        onClick={() => {
          dispatch({ type: "ADD-TASK", payload: prompt("Enter Item name") });
        }}
      >
        Add Items
      </button>

      <div className="list-items">
        <ul>
          {todo.map((item) => (
            <li key={item.id} className="items">
              {item.id}.{item.name}
              <div className="buttons">
                <button
                  className="update"
                  onClick={() => {
                    dispatch({
                      type: "UPDATE-ITEM",
                      payload: {
                        id: item.id,
                        newName: prompt("Enter Item name", item.name),
                      },
                    });
                  }}
                >
                  Update Item
                </button>
                <button
                  className="delete"
                  onClick={() => {
                    dispatch({ type: "DELETE-ITEM", payload: item.id });
                  }}
                >
                  Delete Item
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reducer;
