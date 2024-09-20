import axios from "axios";
import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestrauntMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);

    useEffect(()=>{
        fetchData();
    },[resId])
    
    const fetchData = async()=>{
        const res = await axios.get(MENU_API + resId);
        setResInfo(res.data);
    }
    return resInfo;
}

export default useRestrauntMenu;