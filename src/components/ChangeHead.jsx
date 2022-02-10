import react,{useState,useEffect} from "react";
import Animation from "./Animation";
function ChangeHead(){
let text=["GAME NIGHT","COOKING GONE WRONG","LATE NIGHT AT OFFICE","MOVIE MARATHON"];
const[change,setChange]=useState(text[0]);
useEffect(()=>{
    help();
},[])
function help(){
    var i=0;
        setInterval(
        ()=>{
            if(i==4)
            {
                i=0;
            }
        if(i<4){
           setChange(text[i]);
        //    console.log(i)
        //    console.log(text[i])
           i++;
        }},3000)
}
 return(
  
     <>
     <div>
     <Animation/>
     </div>
     
     {/* <div className="ch">
     <h1 className="h1">{change}?</h1>
     <h2 className="h2">Order food from favourite restaurants near you.</h2>
     </div> */}
     </>
 )
};
export default ChangeHead;