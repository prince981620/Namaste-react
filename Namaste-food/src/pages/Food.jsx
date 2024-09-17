import { useEffect, useState } from "react";
import { Header } from "../component/Header"
import axios from "axios";
import { RestrauntCard } from "../component/RestrauntCard";
import { Shimmer } from "../component/shimmer";
import { SWIGGY_API } from "../utils/constants";

export const Food = ()=>{
    const [resData,setResData] = useState([]);
    const [filteredRes,setFilterRes] = useState([]);
    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        apicall();
    },[])
    const apicall = async ()=>{
        const res = await axios.get(SWIGGY_API);
        const result = res?.data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setResData(result);
        setFilterRes(result);
    }
    return (
        <div>
            <div>
                <input className="border m-4 p-2" type="text" placeholder="search" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                    const res = resData.filter((curRes)=> curRes.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()));
                    setFilterRes(res);
                }} type="button" className="mt-2 text-white bg-slate-400 hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button>
                </div>
            <div className="flex flex-wrap mt-4">
            {filteredRes.length === 0 ? <Shimmer/> : filteredRes.map((res)=><RestrauntCard key={res.info.id} resdata={res}/>)}
            </div>
        </div>
    )
}