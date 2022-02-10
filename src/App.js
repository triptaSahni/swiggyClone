import react from "react";
import Buttons from "./components/Buttons";
import Background from "./components/Background";
import "./App.css";
import ChangeHead from "./components/ChangeHead";
import Input from "./components/Input";
import Popular from "./components/Popular";
import Footer from "./components/Footer";
import Sec2 from "./components/Sec2";
import Left from "./components/Left";
import Image from "./components/Image";
import LastFooter from "./components/LastFooter";
const App=()=>{
  return (
    <>
    <div className="first">
    <div className="col">
    <div className="outTop">
    <div className="top">
    <img className="logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZsAAAB7CAMAAACVdd38AAAAkFBMVEX////8gBn8eQD8ewD8dwD8fhP8fAL9rn38iyz9vJL8dQD/9u38fhH/+PL8fAj/8OX+y67+1Ln8izj9qXL8hiP+49H+2sP+38v8kD/+0LP+6dv/8+r/9/H9omT8lUr+2MD9s4P9n179wJj+x6T9pWn9m1b9sYD9t4v9oGD9rHX8jzz9w578bwD9nFf+5tj9lk21EjpJAAAOvklEQVR4nO1da1fiOhSFNK3QCQWkvBERUC7q4P//d7ct0pwkJ49KsbM0+9Msh0KSnZz3SVstDw+P+tE7DboPszRkjKWvT5vddNn0iDwKjLszRkmQsDBst8MwZAGhQWcz6TU9sN+OxSalAWsrCAPKRtOmR/eb8bimQagS80lPQjtv/vA0g2GHIidGoIewbdOj/I0Yr2PtkYHstIdNj/TXYRNbzkzJTvzRb3qwvwqnlLgxkyMhg6bH+4vw5npoPhHvmx7xr8EorsRMBnK/anrQvwPrCvLsgoR5pfMNeA2qU9Nus2DR9MB/Pu6Tr1CT2WuRJ+fGWEdfoyY7OcxHQG+Khy/ompKcTtOj/9HY0q9T024HT02P/wdjWtl4FkHfmp7Bj0Wv7RBBMyL2lvSNMPqS9QzBXpueww/FtRItB901PYufiftqQTQcxGfbboCBo40W6VOhGYJN0/P4iUjdDAFyt01NB4z6qGftcDw2JE9zmuy54ND0TH4eHLUNy/XJiyGwE0Ze49SMqduxCdv5ym9Mxjb1WdCasXcLPztwwz6anssPQ4+5WQIO3LSpDw7UiolzkNPODfH+Z60wafeq3LC/Tc/mZ6HjGuUs7LSDkZuQeUutRiydo5wO3LTjU9Pz+UlwVzcu3Phawjrx5pyKduEmOjY9n5+EO2dTwIUb7+HUiQ/n9IALN2Hq9KOn+fawOWyHt6+d6v3hsH+6P911s4F134anikZNb5xPKZvTYKrx8ZZ/bENRPuBsprVZHma2cEMdyqOno4CSIAOhNHpB6OkDqP+76HbVique7pFjTD5B2+Zh9eb7iJ4HFmSfpunGuTlvfOhkT5LLk9HDAInIP5QjIfQd4++Ff+D9rLbdCwVs3IQJDbrWeZzWFMSIwoDulXns+SBjtQHrg8Z3hnlRMTfORXZorNNaHAMixq6yobWdClR2qdzilxCyV/bcivAPJQ/q1yy5Ucbuz39yz3jquQlZEpA43c/tgmCrNMRF0UT6zJiPUpWRp+w/A+XgROW8yVz4DzdulnuKqd2QsLn+oTN2jGC7O6EjeTG6wOqKx8oXjfgI6OeKuNfZFtxM3/Njn5wRBflGjWl79nAYOoXSXpDChJDKCwDOsjKJhwRJFAFHgIpL4sTNLtAZRCH9z7jf+jOqkztBJMtEMC22lr9pQdX/rHhuWqvJYLs5jvb7/ej4cngbDKeLlbPe3OI1I7F0crr8cEYv0mIUm09OFPFQuiwtXLh5MLl4QcdQTzwnhuULY8nZgzlM+igPgh8SetmPFfXNVThpynnCQDRc+mASkfgVx2KtiaSG+PfKc7Zz05uZPbwk1Rp4W0tfrEwOSGJeVEq5NHzKSVkjW9FOuwoz3S5LnsUPvvIPUuFMLc/rGIqMzcvVlf7DgZvevc3BS3QHrmutHHsXxRqMwUglY3/BsSnNiCdnhXM1N2P9XGKx5XrHt3IiWOUXU0RMRjyXVEayCWflxt49ocvmDqzUEGnLtZ75Yp/TYReA3HM0Kv9qDvoLv6TaFtVwhMvAYEovkea/AmIGKvfe5e8hg58GIk0eo42bF2vIKtaYaidrIFKhBir8NoH+xpoLCsKNqp17awc73sl4yTzh3ePYweVuCeKT0dnf8n6JkD7L+hacZhg+3RLsr3wKqslt4WYi7f3c+8xtT24X66hpdUQBzcjnk+XIVWrE2mbgCQBhFwDjx7GSo0ASKTh7wnHmCluNtR5fB3afj2vRKeYRBer0H4FFCUJ0/OCFwMvnakz1fS3ciJV5hNxN8l27HL91Pm3jWHe/xUHY0yz+GCyyFegt5vv4zA7BQotL8FTA48JAvwZAc7jnb4xISHxnYWehip5sacJ4jz0HJF5c7i94xmm5aPB7FW/czM0WLnBIIbOTNF8YLTVLYUvTD/DDq30+IOzUtEQHtBztkH+ZIOlcizrtCCJzYg24+5fjPKakLUcFzgDhcW4wQxXFjVDuDbGZ4XsQboQyFpZKxD4RPTWtF7ilYym2M6ch0TWLAZ+lNJa5sJcSx44lUA5g5ow04KZU2Xs1NKZ8uGRhLuzV0mHlmwspJTFyA88hS9W43rvsIJbowQOnqqRJrO3jExzQqfwnaQYVjAEbzGU2faBvlJCFAmA4XBLdYv3p5TuAZa7G2czcQH8rQGJO+kD0ACwaQUqNDSYtdEDP55wfJdmWWVzV6Ckg+U8/pAxgPkmKizIOoAo+GxRkmyo+Lx1ffYZsVhM3fSj7q1VvPes9fBvgNIooBjgcSmSxNoVjOw7AiM8U71orMAqAhfvcTWspqsDO2pbrDIpoBxM3YPObEwgqoGCy7TIZMq/g2CijqFHhmDPSXcEkZJa7Cz+kuI0aVShkHbe20QIsEzdg4qRaK7Exi2HDAh6cKTTSYmW7zmtTOBaZ1pdWNyTRRp9ZGEhxGzW4VMScQQh6hHyLiZsOZqc7ARTAOKQTZYBMTWaqcXGAmJk1eTgO43yQlzcMyFG3KisQ4Yl6wm67gPZbPZCRwlS3gZsVP5hhRZ0BLHwlSmTHSpCI4NggE5AF+ZehJCUkLBGzI5Dj/SVgRmOIlgZnRgK3q3HhYuAGaDRw5BaHLgJJWgKVAZr1tsiDB4y6LiqpGOat1mZFWyXDHAvdknu83AbsqEyooTljBgjE200N3IBgJUikTuJAAZGSqa17Lg0J/ysj6qNyCueMCDO/YmwZ+jVx4yAZ0JQHU3VgAWj3A+2Tpnxh5vzf6NRM3ACFDkwBtM41kbjhpi2M62EGL17oinVxYvUdrdqEmpI8QfCGpgrxYC8QYyHgY3Dkwo4vh+buCQM3U9Qdr8pNiv2VQ1OE3FFXXNO7NKjn4NjUTYExelcrUneiS2EHPTRHp7GCHc8N13lO3AALDyRaK3Cj/kqg2dg9a+7PCY6XPxyoahgKubISWJNwXnGN5bY1us5kC4BcI0+aOHEDBA3lf63ADcyAnhHossqjOtzPxPWerj+bQKnpwoJSYgj/shZ9OehZQOf2GrhZ8h0JTCQnbkZYdr8SN3KkDJ1/AUMm3x3EWmdXordN5RrCAPnYUh3WuXxAXQXdGph8zxSTTE7cgApKMOsq3Ei3O5mayrQVMBUgG5pmDNfiTdRYMAz6EZ84W2Oq1a+TpyZu1lg1jxM3Q/77IMBaiZuloEdMMSNESlSFxgbUY/wMayLRzh0lnHT5Ebm3W/vjJm5AfI/L40kcXgC+XuIGRp+4okuZ+qi+WQw6oOag3PXBaMd4LJzlpK3kMqQPy9xcUjmyZ601EU3cwFKJMvQyTe8v4Ha7zI0gDsuYwqx8kvumem7gdYLmdr+rYwO4paVgHsEQzZLvf/x5KUZe9mHLpMklgyWMuTVYoIy4R3c8jCpzA0v2kTAYN88Nqw6W3HJp47WXQjrFY08zGhI4DqhUsQck6c/dICFfb/B6jdzALyFqFHuk5waaWWGimO9TF26Gztxcq3Fie9XnapSrfyFPCHN+6DNC5Ank7kQTDnVdCxi5EQxZqpBj4EYIpbC2HC6qmZsrTbXE3rD2Rs7bNAKuCIg142JJKDuF0gNKu1DfkmaugRKSFuRVWmKDTBPL+kI5o+0k0ypwI2e+qsF6scCEx2qS9LLGwLnUBEph2kbQCfA/DPLUzE1fEBYsfoCqYzIrz6zKjeTY0xTWTi54JLAeblrDK8ixFs4s3oFwCmmnO58MuzC0pjt4wCISLUHg+ximZqnrFKsz2wklT93dfL7rHjsxsPARbkRa2yGJ7zdvg/luu/kgoAmuJm5ag/xdnnoYr4O09q3uBV8rDEj2Y1CX6CbB07/SxfpcbpgqXWy16q/yrFjei5etg2AaIdy0drKCDqOi4TQSvrEublqrwSZvSMt70gocc4wumOlz16hzIsKW+Y41jj1X+nLkoFSQprI4GzdLNM0lA+OmNXJxO2rjxgJ9RNTF79wZRaYuRM7rbZS1LStsqKGNwdp/c0JbaSWg3LSeHcj5Lm6GurE4HJuWZZ8RrQl+idsodXWXLAqaZ7/A3lM4xl7+KyHAD/VfOzmNc2PXNgWe9FPRF4W3emdhiIScPl0yY/zboRd3kdoKjaiO/aPtRahJoC/D+RZujBsXYq8Ta8gVDxxnUYptwLMNZ7xd16VPurc3LnFC9Cb6PDKlJUP6bFj0K7jpLRfj8fjU5zPXcUOdL03bUUxlMXMxcuHmoZHawoYze71udz88pvprAujetHDLPTql87Q6xhcHf4mb/nDz3z2jMc0Rx2x9nMhfBhFVeMVn/z/lAgxGZxZu8+OB2mJF/4zZDnG9M2XQoYlKT0KjO9t9SOMngpgTIaFryyudv8DN4D6WzHsWxTPpyyBIpQO5OEY0uISfw4TYatZbRUBUE5XJXEdDvCbHkZZFZpbC5cko8zz5vPOhBU8Ot8BkG27byTyiMqQesoCSTtd6x9WQV8Khdw+pGLxjZktRQYZzo8906zA5fER5lyghndHAYVQLqssL/glCyxsq5mWZ5sH+3vjx26hDziOLXkdvFapp+/PNmuVPZo+mT91Hl/LqE68g3bhdD4C/CodqubHsWy2W/aXzfQWvkS6d/hK4KztH9Jb9vlvft4I//f7yppfJohlQPTcG69ejbqAXeBYKF+NGvu3E46bAMqBabvwt998KJcDa/vT8EW4MbpnHLYBcDaXhxr8P97vxqJpqRYmQyo0+T+9xIyiF1BpuyIv1qzxqhtpbWbxrTbbgvuraeFwDpSEx7Cxa01DSQ1jvqMfNofRVhTSSQ7XEv3ugEWAd4zJblS898KgHG/tdid5Gawq2xoLq4WePumBpZXMr3/C4DQ5GqYZdN+bxbTC9ylgtSPL4ThguQA6wK5c8vhH4lThtH+L8F7DWlPeQ27+Ly8OCPl7w6F+3/i8Au68I64z0aAAP6smpeq+rx43QU4sHqpUKetwOSrma/P4tj+ZwEFUO9WG0fwgzaEgHf+0PeHwbVqBllvmczb8FfoF+6COc/xrKPJtj76DHN+JT5VR814XHd2BVtAzRTdPj8ECQt1wG5hdBeDSFLU3wu7E9msfD9W8s9rgRej5l4+Hh8c/jf7nS1/8ph2TtAAAAAElFTkSuQmCC"></img>
    </div>
    <div className="BUT">
    <Buttons className="logIn" content="Login"/>
    <Buttons className="signUp" content="Sign Up"/>
    </div>
    </div>
    <ChangeHead/>
    <Input/>
    <Popular className="pop"/>
    </div>
    <Background className="back" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"/>
    
    </div>
    <div className="S2">
    <Sec2  head="No Minimum Order" para="Order in for yourself or for the group, with no restrictions on order value" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"/>
<Sec2 head="Live Order Tracking" para="Know where your order is at all times, from the restaurant to your doorstep" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"/>
<Sec2 head="Lightning-Fast Delivery" para="Experience Swiggy's superfast delivery for food delivered fresh & on time" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"/>
</div>

   <Left/> 
  <div className="sahni">
<Footer rang="grey"  id="fot1" name="Comapany" i="1"/>
<Footer  rang="grey" id="fot2" name="Contact" i="2"/>
<Footer  rang="grey" id="fot3" name="Legal" i="3"/>
<div className="footerR">
<Image className="app first" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
<Image className="app" src="https://web.archive.org/web/20210903174711im_/https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
</div>
</div>
<hr/>
<div className="sahni">
<Footer  rang="grey" name="WE DELIVER TO" i="4"/>
<Footer rang="black" name="/" i="5"/>
<Footer rang="black" name="/" i="6"/>
<Footer rang="black" name="/" i="7"/>
</div>   
<LastFooter/> 
  </>)
}
export default App;