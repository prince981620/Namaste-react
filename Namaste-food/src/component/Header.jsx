import { Link } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"
export const Header = ()=>{
    return (
        <div className="p-4 flex justify-between border-2 border-black">
            <div className="w-[150px]">
                <img src={LOGO_URL}></img>
            </div>
            <div className="flex">
                <Link to={"/"}>
                <div className="mt-2 text-black underline px-5 py-2.5 text-center mb-2">Home</div>
                </Link>
                <Link to={"/aboutus"}>
                <div className="mt-2 text-black underline  px-5 py-2.5 text-center mb-2">About Us</div>
                </Link>
                <Link to={"/contactus"}>
                <div className="mt-2 text-black underline px-5 py-2.5 text-center mb-2">Contact Us</div>
                </Link>
                <Link to={"/datatable"}>
                <div className="mt-2 text-black underline px-5 py-2.5 text-center mb-2">Data Table</div>
                </Link>
                <Link to={"/food"}>
                <div className="mt-2 text-black underline px-5 py-2.5 text-center mb-2">Food</div>
                </Link>
                <Link to={"/signup"}>
                    <button type="button" className="ml-5 mt-2 text-white bg-yellow-400 hover:bg-slate-400 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Sign up</button>
                </Link>
            </div>
                
        </div>
    )
}