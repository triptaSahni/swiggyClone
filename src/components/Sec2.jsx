import react from "react";
const Sec2=(props)=>{
    return (
        <>
        <div className="box">
           <img style={{width:"105px",height:"199px"}}src={props.src}/>
           <h4>{props.head}</h4>
           <p>{props.para}</p>
        </div>
        </>
    )
}
export default Sec2;