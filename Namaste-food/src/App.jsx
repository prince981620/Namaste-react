import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Landing } from './pages/Landing';
import { Signup } from './pages/Signup';
import { Signin } from './pages/Signin';
import { DataTable } from "./pages/DataTable";
import { Food } from "./pages/Food";
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/signup" element = {<Signup/>}/>
        <Route path="/signin" element = {<Signin/>}/>
        <Route path="/datatable" element= {<DataTable/>}/>
        <Route path="/food" element={<Food/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
