import '../App.css';
import {useDispatch,useSelector} from 'react-redux';
import { addToCart, removeFromCart } from '../store/Slice';
export default function Card({item}){
    const dispatch=useDispatch();
    const {CartSlice}=useSelector((state)=>state);
    console.log(CartSlice)
    function handlecart(){
      dispatch(addToCart(item));
      console.log("adde")
    }
    function remove(){
        dispatch(removeFromCart(item.id));
        console.log("removed")
    }
    return <div className='card'>
         <img src={item.image}></img>
         <h5>{item.title.substring(0,20)}</h5>
         <h3>$ {item.price}</h3>
         <button onClick={() =>
            CartSlice?.some(i => i.id === item.id) ? remove():handlecart()
        }>
            {CartSlice?.some(i => i.id === item.id)?"remove":"Add cart"}
        </button>
    </div>
}