import insertTodos from "./../utils/insertTodos";
import updateTodo from "./../utils/updateTodo";
import ACTIONS from "./actions";

const todosReducer = (state, actions) => {
    switch(actions.type) {
        case ACTIONS.ADD_TODO:
            const newState = [...state, actions.payloads.todo];

            insertTodos(newState);

            return newState;

        case ACTIONS.TOGGLE_TODO: 
            const newStates = state.map(todo => {
                if(todo.id === actions.payloads.id) {
                    return {...todo, completed: !todo.completed}
                }

                return todo
            });

            updateTodo(newStates);

            return newStates;
        default: 
            return state;
    }
}

export default todosReducer