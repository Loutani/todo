import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home'
import Error from './pages/Error'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Error />} />          
        </Routes>
      </BrowserRouter>

      <Outlet />
    </>
  );
}

export default App;
