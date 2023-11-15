import React from "react";
import gunungan from '../Images/1x/Asset 2.png'
import One from "../Images/assets/1x/1.png";
import Two from "../Images/assets/1x/2.png";
import Name from "../Images/assets/1x/Asset 3.png"
import "./Cover.css";
import { useParams } from "react-router-dom";
import background from "../Images/assets/1x/Asset 2.png"

function Cover() {
    // Get the userId param from the URL.
    let { invited } = useParams();
    function gotoLink(){
        window.location = "/invite"
    }
    return(
        <div id="objd-cont">
            <div >
                <div className="objects">
                    <b id="person">{invited}</b>
                </div>
                <img className="objects" src={One} alt="" id="Ones"/>
                <img className="objects" src={Two} alt="" id="Twos"/>
                <img className="objects" src={Name} alt="" id="Name"/>
                <button type="button" id="entry" class="btn btn-dark objects" onClick={gotoLink} ><b>Masuk</b></button>
            </div>
            <div id="cover-bg">
                <img src={background} alt="" />
            </div>
        </div>
    )
  }
  
  
export default Cover