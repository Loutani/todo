import { useReducer } from 'react'

import Header from './../components/Header/Header'
import Menu from './../components/Menu/Menu'
import Content from './../components/Content/Content'
import TodoWrapper from '../components/TodoWrapper/TodoWrapper'

import todosReducer from '../state/reducer'
import { fetchTodos } from '../utils/fetch'

import SwitchInput from './../components/SwitchInput/SwitchInput'

function CompletedTodo() {

    const todos = fetchTodos();
    
    const [todosList, dispatch] = useReducer(todosReducer, todos);
    
    return (
        <div>
            <Header>
                <Menu />
                <SwitchInput title='DARK' classname='header-text' />
            </Header>
            <Content>
                <TodoWrapper title='COMPLETED' todosList={todosList} dispatch={dispatch} isCompleted={true} />
            </Content>
        </div>
    )
}

export default CompletedTodo