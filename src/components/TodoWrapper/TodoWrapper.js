import Todo from '../Todo/Todo'
import Typography from './../Typography/Typography'

import ACTIONS from '../../state/actions'

import './todoWrapper.css'

function TodoWrapper({title, isCompleted, todosList, dispatch}) {
    const toggleTodoHandle = id => {
        dispatch({type: ACTIONS.TOGGLE_TODO, payloads: {id} })
    }

    const todos = todosList.filter(todo => todo.completed === isCompleted)

    return (
        <div className='todo-wrapper'>
            <Typography varient='h5' classname='todo-header'>
                {title}
            </Typography>
            {
                todos.length > 0 
                ? 
                todos.map(
                        todo => <Todo  key={todo.id} todo={{...todo, clickHandle: toggleTodoHandle}} />
                    ) 
                : 
                <Typography varient='p' classname='m-y-1 text-center'>No Todo found</Typography>
            }
        </div>
    )
}

export default TodoWrapper