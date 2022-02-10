import react from "react";
const Footer=(props)=>{

if((props.i)=="1")
var footer=["About us",
"Team",
"Careers",
"Swiggy Blog",
"Bug Bounty",
"Swiggy Super",
"Swiggy Corporate",
"Swiggy Instamart"];
if((props.i)=="2")
var footer=["Help & Support",
"Partner with us",
"Ride with us"];
if((props.i)=="3")
var footer=["Terms & Conditions",
"Refund & Cancellation",
"Privacy Policy",
"Cookie Policy",
"Offer Terms",
"Phishing & Fraud"];
    if(props.i=="4")
    var footer=["Abohar",
   " Adilabad",
   " Adityapur",
    "Adoni",
    "Agartala"];
    if(props.i=="5")
    {
        
    // document.getElementById("ul").classList.add("margin");
    var footer=[
        "Dausa",
"Davanagere",
"Dehradun",
"Dehri",
"Delhi"];
    }
if(props.i=="6")
{
    // document.getElementById("ul").classList.add("margin");
var footer=["Kishanganj","Kishangarh","Kochi","Kodaikanal","Kolar"];
}
if(props.i=="7")
{
    // document.getElementById("ul").classList.add("margin");
var footer=["Pudukkottai",
"Pune",

"Puri",
"Purnea",
"Purulia",
"Puttur"];
}



const foot=footer.map((item,index)=>{
return (
    <li style={{color:"white"}}>{footer[index]}</li>
)
})
return (
    <>
    <div className="align">
    <h4 style={{color:`${props.rang}`}} >{props.name}</h4>
<ul id="ul">{foot}</ul>
</div>
    </>
)
}
export default Footer;
