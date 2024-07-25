import Button from '@mui/material/Button';
import { Navigate, Route, Routes } from "react-router-dom";
import {Home} from './pages/Home'
import {Dashboard} from './pages/dashboard/Dashboard'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
    </Routes>
    </>
  );
}

export default App;
