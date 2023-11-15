import React from "react";
import './Socmed.css'
import symbol from '../Images/1x/Asset 3.png'
import IGLogo from '../Media/instagram.png'
import TwitLogo from '../Media/twitter.png'

class Socmed extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="socmed-container">
                <img src={IGLogo} alt="" />
                <p>ivanfirmandar</p>
                <img src={TwitLogo} alt="" />
                <p>ivanfirmandar</p>
            </div>
        )
    }
}
export default Socmed