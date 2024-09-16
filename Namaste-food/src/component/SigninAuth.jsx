import { useState } from "react";
import { HeaderAuth } from "./HeaderAuth"

export const SigninAuth = ()=>{
    const [signinPayload,setSigninPayload] = useState({});

    return (
        <div>
            <div className="h-screen flex justify-center flex-col">
                    <div className="flex justify-center">
                    <div>
                    <HeaderAuth type="signin"/>
                        <label className="block my-2 text-sm font-medium text-gray-900">Email</label>
                        <input onChange={(e)=>{
                            setSigninPayload(res=>({
                                ...res,
                                email:e.target.value
                            }))
                        }} type="text" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john@example.com" required />
                        <label className="block my-2 text-sm font-medium text-gray-900">Password</label>
                        <input onChange={(e)=>{
                            setSigninPayload(res=>({
                                ...res,
                                password:e.target.value
                            }))
                        }} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
                        
                        <button onClick={()=>{
                            console.log(signinPayload);
                        }} type="button" className="mt-8 w-full text-white bg-yellow-400 hover:bg-slate-400 focus:outline-none focus:ring-4 focus:ring-slate-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ">Login</button>
                    </div>
                    </div>
            </div>
        </div>
    )
}
        