import React from "react";
import { Link } from "react-router-dom";
const Navbar=()=>{
    return(
        <div>
            <nav>
            <Link to='/' className="nav-item">Home</Link>
            <Link to='/About' className="nav-item">About</Link>
            <Link to='/Menu' className="nav-item">Menu</Link>
            <Link to='/Reservation' className="nav-item">Reservation</Link>
            <Link to='/Order-online' className="nav-item">Orderonline</Link>
            <Link to='Login' className="nav-item">Login</Link>

        </nav>
        </div>
        

    );
}
export default Navbar;