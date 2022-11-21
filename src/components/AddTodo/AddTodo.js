import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
import ACTIONS from '../../state/actions';
import insertTodo from '../../utils/insertTodos';
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput';

import './addTodo.css'

function AddTodo({dispatch}) {
    const todoRed = useRef();

    const handleClickAddTodo = () => {
        const todoValue = todoRed.current.value;

        if(todoValue === '') {
            return;
        }

        const todo = {
            id: Math.random(),
            title: todoValue,
            completed: false
        }

        insertTodo(todo);

        dispatch({type: ACTIONS.ADD_TODO, payloads: {todo}})

        todoRed.current.value = ''
    }

    return (
        <div className='todo-add'>
            <TextInput todoRed={todoRed} />
            
            <Button onclick={handleClickAddTodo} classnames='btn btn-primary btn-circle' icon={faPlus} iconColor='white' />
        </div>
    )
}

export default AddTodo