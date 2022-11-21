import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import Tasks from './pages/Tasks'
import RemainTodo from './pages/RemainTodo'
import CompletedTodo from './pages/CompletedTodo'
import Error from './pages/Error'

import './app.css'
import ThemeProvider from "./providers/ThemeProvider";

function App() {

  return (
    <ThemeProvider>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" end element={<Tasks />} />
          <Route path="/remain-todo" element={<RemainTodo />} />
          <Route path="/completed-todo" element={<CompletedTodo />} />

          <Route path="/error" element={<Error />} />
          
          <Route path="*" element={<Error />} />          
        </Routes>
      </BrowserRouter>  

        <Outlet />
      </ThemeProvider>
  );
}

export default App;
