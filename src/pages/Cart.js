import { useDispatch, useSelector } from "react-redux";
import CartCard from "../CartCard";
import '../App.css'
import { useEffect, useState } from "react";
export default function Cart({cartItem}){
    const[price,setPrice]=useState(0);
    const dispatch=useDispatch();
    const {CartSlice}=useSelector((state)=>state);
    console.log(CartSlice);
    function calPrice(){
        let m=0;
        CartSlice?.map((i)=>m=m+(i.price));
        setPrice(m);
        console.log(m);
    }
    useEffect(()=>{
     calPrice();
    })
    return <div style={{display:'flex',flexWrap:'wrap'}}>
        {
            CartSlice?.map((item)=><CartCard item={item}/>)
        }
        <h1 className="price">Total Price :$ {price}</h1>
        <button className="ch" onClick={()=>alert("thanks for shopping")}>Check Out</button>
       
        
        
    </div>
}