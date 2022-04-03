import { useEffect, useState } from "react";

const useChart=()=>{
    
const [loadData,setLoadData]=useState([]);
useEffect(()=>{
    fetch('rechartdata.json')
    .then(res =>res.json())
    .then(data => setLoadData(data))
},[])
return [loadData,setLoadData];
}
   
export default useChart;