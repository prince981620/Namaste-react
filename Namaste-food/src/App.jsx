  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import './App.css'
  import { Landing } from './pages/Landing';
  import { Signup } from './pages/Signup';
  import { Signin } from './pages/Signin';
  import { DataTable } from "./pages/DataTable";
  import { Food } from "./pages/Food";
import { Header } from "./component/Header";
import { AboutUs } from "./pages/AboutUs";
import { Contactus } from "./pages/ContactUs";
  function App() {

    return (
      <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/signin" element = {<Signin/>}/>
          <Route path="/datatable" element= {<DataTable/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/food" element={<Food/>}/>
        </Routes>
      </BrowserRouter>
      </>
    )
  }

  export default App
