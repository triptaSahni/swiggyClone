import React from "react";
const Buttons=(props)=>{


var div=document.createElement("div");

function checkCount()
{

    const buttonsABC=props.count;
 if(buttonsABC=="1")
 {
check(); 
 }
 }
 function check(){
    var divB=document.getElementById("outD");
    console.log("fired");
    console.log(divB);
    
   
if (document.getElementById("inB").value =="" && (div.classList.contains("added")!=true))
{
    div.innerText="Enter Your Delivery Location";
    div.classList.add("added");
    divB.appendChild(div);
}
if( document.getElementById("inB").value !="" && div.classList.contains("added")==true)
{
    div.classList.remove("added");
    divB.removeChild(div);
}

    }

    return(
        <>
       
        
            <button onClick={checkCount} className={props.className}>{props.content}</button>
        </>
    )


}
export default Buttons;