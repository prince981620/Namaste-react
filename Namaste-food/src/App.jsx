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
import { RestrauntPage } from "./pages/RestrauntPage";
import { useOnlineStatus } from "./utils/useOnlineStatus";
import { OfflinePage } from "./pages/OfflinePage";
import { lazy, Suspense } from "react";
import { Shimmer } from "./component/shimmer";
// import  Grocessary  from "./pages/Grocessary";

const Grocessary = lazy(()=>import("./pages/Grocessary"))
function App() {

    const onLineStatus = useOnlineStatus();
    if(onLineStatus === false){
      return (
        <OfflinePage/>
      )
    }

    return (
      <>
      <BrowserRouter>
      <Header/>
      <Suspense fallback={<Shimmer/>}>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/signup" element = {<Signup/>}/>
          <Route path="/signin" element = {<Signin/>}/>
          <Route path="/datatable" element= {<DataTable/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/grocessary" element={<Grocessary/>}/>
          <Route path="/restraunt/:resid" element={<RestrauntPage/>}/>
        </Routes>
        </Suspense>
      </BrowserRouter>
      </>
    )
  }

  export default App
