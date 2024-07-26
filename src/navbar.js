import { Link } from "react-router-dom";
import './App.css';

export default function Navbar(){
    return <div className="navbar">
        <div>
            <h1>Shopping Cart App</h1>

        </div>
        <div>
            <ul>
            <Link to='/' className="link"><li>Home</li></Link>
           <Link to='/cart' className="link"><li>Cart 🛒</li></Link>
           </ul>
        </div>
    </div>
}