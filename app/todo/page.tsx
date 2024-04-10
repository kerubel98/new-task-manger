"use client";
import axios, { AxiosError, CanceledError } from "axios";
import { error } from "console";
import { todo } from "node:test";
import { useEffect, useState } from "react";

interface todo {
  id: number;
  title: string;
  complited: Boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [error, setError] = useState("");
  const [isLoding, setLoding] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoding(true);
    axios
      .get<todo[]>("https://jsonplaceholder.typicode.com/todos", {
        signal: controller.signal,
      })
      .then((res) => {
        setTodos(res.data);
        setLoding(false);
      })
      .catch((error) => {
        if (error! instanceof CanceledError) return;
        setError(error.message);
        setLoding(false);
      });

    return () => controller.abort();
  }, []);
  const deletTodos = (todo: todo) => {
    const listtod = todos;
    setTodos(todos.filter((tu) => tu.id !== todo.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/todos/" + todo.id)
      .catch((err) => {
        setTodos(listtod);
        console.log(err.message);
      });
  };
  const addTodos = () => {
    const orginaltod = [...todos];
    const newTodo:todo= {id:0, title:"new task", complited:false}
    setTodos([...todos, newTodo])
    axios
      .post("https://jsonplaceholder.typicode.com/todos" , newTodo)
      .then((req) => setTodos([req.data, ...todos]))
      .catch((err) => {
        setTodos([...orginaltod])
        setError(err.message);
      });
  };
  return (
    <div className="self-center justify-self-center  flex flex-col  justify-center w-full">
      <button 
      className="bg-blue-500 rounded-sm px-8 self-start ml-5 mt-10"
      onClick={addTodos}>
        Add
      </button>
      <ul className="mt-3 border-2 px-2 rounded-md w-full m-5 flex flex-col">
        {isLoding && (
          <button
            type="button"
            className="bg-indigo-500 flex items-center rounded-lg w-full px-5 text-white self-center justify-self-center"
            disabled
          >
            <div
              className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
              role="status"
            ></div>
            Processing...
          </button>
        )}
        {error && <p className="text-red-900">{error}</p>}
        {todos.map((tod) => (
          <li
            key={tod.id}
            className="flex justify-between space-y-11 mb-3 border-b-2 hover:bg-blue-500 px-4 rounded-md"
          >
            {tod.title}{" "}
            <button
              type="button"
              onClick={() => deletTodos(tod)}
              className="inline-block rounded-lg bg-red-900 space-y-6 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
