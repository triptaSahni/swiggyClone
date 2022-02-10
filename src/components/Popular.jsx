import react from "react";
const Popular=(props)=>{
    var arr=["Ahemdabad","Bnagalore ","Chennai ","Delhi ","Gurgaon ","Hyderabad ","Kolkata ","Mumbai ","Pune " ,"&more. "];
    
        const help=
  arr.map((item,index)=>{
   
    if(index%2==0)
    {
    return <p style={{ color:"#686B78",fontWeight:"bold"}}>{arr[index]}</p>
    }
else
    {
return <p style={{color:"#93959F",fontWeight:"light"}}>{arr[index]}</p>
} 

  })
        
        

    return (
        <>
        <div className={props.className}>
        <h4>POPULAR CITIES IN INDIA</h4>
        <div className="help">{help}</div>
        </div>
       </>
    )
}
export default Popular;