type tasks = {
    id: string
    discription: string
    status: "pending" | "open" | "close" | "frozen"
    email: string
  }
  
  export const todos: tasks[] = [
    {
      id: "728ed52f",
      discription: "",
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "489e1d42",
      discription: "",
      status: "open",
      email: "example@gmail.com",
    },
    // ...
  ]
  