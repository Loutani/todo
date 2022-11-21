const fetchTodos = () => {
    const todos = window.localStorage.getItem('todo-app');

    return todos ? JSON.parse(todos): []
}
export {fetchTodos}