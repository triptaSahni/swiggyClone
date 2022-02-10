import react from "react";

import Buttons from "./Buttons";
const Input=()=>{

    return (
        <>
        <div id="outD" className="outDiv">
        <div className="inpButton">
        
        <input id="inB" className="input" placeholder="Enter Your Delivery Location"/>
        <button className="locate"><i class="far fa-location"></i> Locate Me</button>
        <Buttons count="1" className="inpB" content="FIND FOOD"/>
        </div>
        </div>
       </>
    )
}
export default Input;