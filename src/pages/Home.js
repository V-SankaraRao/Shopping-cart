import { useState,useEffect } from "react";
import Card from "./Card";
import '../App.css';
export default function Home(){
    const[data,setData]=useState([]);
    const[loading,setLoading]=useState(false);

    async function fetchdata(){
        setLoading(true);
        const res=await fetch("https://fakestoreapi.com/products");
        const da=await res.json();
        if(da){
            setLoading(false);
            setData(da);
            
            
        }
    }
    useEffect(()=>{
     fetchdata();
     console.log(data);
    },[]);
    if(loading) return <div>loading data....,</div>


    return <div className="home">
        {
           data?.map((item)=><Card item={item}/>)
        }

    </div>
}