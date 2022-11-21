const insertTodos = (todos) => {
    window.localStorage.setItem('todo-app', JSON.stringify(todos));
}

export default insertTodos