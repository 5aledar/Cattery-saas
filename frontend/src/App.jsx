// import Button from '@mui/material/Button';
import {  Route, Routes } from "react-router-dom";
import {Home} from './pages/Home'
import {Dashboard} from './pages/dashboard/Dashboard'
import { AddCat } from "./pages/dashboard/AddCat";
import {EditCat} from './pages/dashboard/EditCat'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/add' element={<AddCat></AddCat>}></Route>
      <Route path='/edit' element={<EditCat></EditCat>}></Route>
    </Routes>
    </>
  );
}

export default App;
