import react from "react";
const Image=(props)=>{
return (
    <>
    <img src={props.src} className={props.className}/>
    </>
)
}
export default Image;