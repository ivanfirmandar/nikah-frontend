
import React from "react";
import './Sign.css'
import symbol from '../Images/1x/Asset 3.png'

class Sign extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="sign-container">
               <p>{this.props.name}</p>
               <img src={symbol} alt="" />
               <div id="sign-center">
                <div id="sign-left"></div>
                <div id="sign-right"></div>
               </div>
            </div>
        )
    }
}
export default Sign