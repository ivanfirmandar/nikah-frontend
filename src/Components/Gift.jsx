import React from "react";
import CardImg from "../Images/assets/4x/debit card@4x.png";
import One from "../Images/assets/1x/1.png";
import './Gift.css'

class Gift extends React.Component{
    constructor(props){
        super(props)
    }
    closeBlock(){
        document.getElementById('giftandblack').style.display = "none"
    }
    render(){
        return(
            <div id="giftandblack">
            <div id="Gift-container">
                <div id="gift-header">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" onClick={this.closeBlock}>
                    <path d="M25,2C12.319,2,2,12.319,2,25s10.319,23,23,23s23-10.319,23-23S37.681,2,25,2z M33.71,32.29c0.39,0.39,0.39,1.03,0,1.42	C33.51,33.9,33.26,34,33,34s-0.51-0.1-0.71-0.29L25,26.42l-7.29,7.29C17.51,33.9,17.26,34,17,34s-0.51-0.1-0.71-0.29	c-0.39-0.39-0.39-1.03,0-1.42L23.58,25l-7.29-7.29c-0.39-0.39-0.39-1.03,0-1.42c0.39-0.39,1.03-0.39,1.42,0L25,23.58l7.29-7.29	c0.39-0.39,1.03-0.39,1.42,0c0.39,0.39,0.39,1.03,0,1.42L26.42,25L33.71,32.29z"></path>
                    </svg>
                </div>
               <img src={CardImg} alt="" />
               <img className="objects" src={One} alt="" id="OnesGift"/>
            </div>
            <div id="black">

            </div>
            </div>
            
            
        )
    }
}
export default Gift