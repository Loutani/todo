import Header from '../components/Header/Header'
import Menu from '../components/Menu/Menu'
import Content from '../components/Content/Content'
import AddTodo from '../components/AddTodo/AddTodo'
import Separator from '../components/Separator/Separator'
import TodoWrapper from '../components/TodoWrapper/TodoWrapper'
import { fetchTodos } from '../utils/fetch'
import { useReducer } from 'react'
import todosReducer from '../state/reducer'
import SwitchInput from './../components/SwitchInput/SwitchInput'

function Home() {

    const todos = fetchTodos();

    const [todosList, dispatch] = useReducer(todosReducer, todos);

    return (
        <>
            <Header>
                <Menu />
                <SwitchInput title='DARK' classname='header-text' />
            </Header>

            <Content>
                <AddTodo dispatch={dispatch}/>

                <Separator />

                <TodoWrapper title='TO DO' todosList={todosList} dispatch={dispatch} isCompleted={false} />

                <TodoWrapper title='COMPLETED' todosList={todosList} dispatch={dispatch} isCompleted={true} />
                
            </Content>
        </>
    )
}

export default Home