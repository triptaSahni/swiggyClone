import react from "react";
import Phone from "../Phone";
import Image from "./Image";
const Left=()=>{
return(
    <>
    <div className="outS3">
    <div className="S3">
    <h1>Restaurants in <br/>your pocket</h1>
    <h3>Order from your favorite restaurants & track on the go, with the all-new Swiggy app.</h3>
    <div className="img">
    <div>
<Image className="app" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
</div>
<div>
<Image className="app" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
    </div>
    </div>
    </div>
    <div className="right">
    <Phone  className="ph1" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"/>
    <Phone className="ph2" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"/>
    </div>
    </div>
    </>
)
}
export default Left;