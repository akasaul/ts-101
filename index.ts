import axios from "axios";

const url = 'http://jsonplaceholder.typicode.com/todos/1';

// type annotation 
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
.then(res => {
    // typed as todo 
    const todo = res.data as Todo;

    // todo.someProp  = throws an erorr

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed);
  })


  // types on arguments 
  const logTodo = (id: number, title: string, completed: boolean) => {
      console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `);
  }