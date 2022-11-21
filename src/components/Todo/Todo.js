import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typography from './../Typography/Typography'

import './todo.css'

function Todo({todo}) {

    const {id, title, completed, clickHandle} = todo;

    return (
        <div className='todo'>
            <div onClick={() => clickHandle(id)} className={completed ? `todo-completed active` : `todo-completed`}>
                { completed && <FontAwesomeIcon className='icon-color' icon={faCheck} /> }
            </div>
            {
                completed ? 
                <strike>
                    <Typography classname='todo-text' varient='p'>{title}</Typography>
                </strike> : 
                <Typography classname='todo-text' varient='p'>{title}</Typography>
            }
        </div>
    )
}

export default Todo