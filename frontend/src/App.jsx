import {  Route, Routes } from "react-router-dom";
import {Home} from './pages/Home'
import {Dashboard} from './pages/dashboard/Dashboard'
import { AddCat } from "./pages/dashboard/AddCat";
import {EditCat} from './pages/dashboard/EditCat';
import {ResourceCalculator} from './pages/ResourceCalculator'
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      <Route path='/add' element={<AddCat></AddCat>}></Route>
      <Route path='/edit/:catName' element={<EditCat></EditCat>}></Route>
      <Route path='/ResourceCalculator' element={<ResourceCalculator></ResourceCalculator>}></Route>
    </Routes>
    
    </>
  );
}

export default App;
