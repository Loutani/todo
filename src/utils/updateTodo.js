const updateTodo = (states) => {
    window.localStorage.setItem('todo-app', JSON.stringify(states));
}

export default updateTodo;