type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Todo = {
  title: "Assistir Dark novamente",
  description: "Relembrar os detalhes",
  completed: false,
};

console.log(todo);
todo.completed = true;
console.log(todo);
