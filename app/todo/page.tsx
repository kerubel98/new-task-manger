"use client";
import axios from "axios";
import { error } from "console";
import { useEffect, useState } from "react";

interface todo {
  id: number;
  title: string;
  complited: Boolean;
}

const Todo = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get<todo[]>("https://jsonplaceholder.typicode.com/xtodos")
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error.message));
  }, []);

  return (
    <ul>
      {error && <p className="text-red-900">{error}</p>}
      {todos.map((tod) => (
        <li key={tod.id}>{tod.title}</li>
      ))}
    </ul>
  );
};

export default Todo;
