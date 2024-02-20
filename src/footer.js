import React from "react";
import Navbar from "./Navbar";
const Footer=()=>{
    return(
        <div>
            <footer>
                <div className="img2">
                    <img src={require("./assets/images/Logo1.png")} alt="logo2"/>
                </div>
                <div className="Navbar2">
                    <Navbar/>

                </div>
                <div className="c1">
                    <p>contact <br/><br/> <address>
                    Adress:Los angles
                    </address><br/>phonenumber-000000000 <br/><br/> Email-abc@gmaail.com</p>
                </div>
                <div className="s1">
                    <p>Soial Medial Links<br/><br/>Instagram<br/><br/>Facebook</p>
                </div>
            </footer>
        </div>

    );
}
export default Footer; 