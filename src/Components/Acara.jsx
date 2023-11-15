
import React from "react";
import './Acara.css'
import symbol from '../Images/1x/Asset 3.png'

class Acara extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="acara-container">
                <div className="acara-date" data-aos='flip-up'>
                    <h1 className="acara-date-title">Akad</h1>
                    <p className="acara-date-week">Minggu</p>
                    <div className="acara-date-shape">
                        <div></div>
                        <div></div>
                    </div>
                    <p className="acara-date-month">Des</p>
                    <p className="acara-date-day">03</p>
                    <p className="acara-date-year">2023</p>
                    <div className="acara-date-shape2">
                        <div></div>
                        <div></div>
                    </div>
                    <p className="acara-date-time">08.00 WIB</p>
                </div>
                <div className="acara-date" data-aos='flip-up'>
                    <h1 className="acara-date-title">Resepsi</h1>
                    <p className="acara-date-week">Minggu</p>
                    <div className="acara-date-shape">
                        <div></div>
                        <div></div>
                    </div>
                    <p className="acara-date-month">Des</p>
                    <p className="acara-date-day">03</p>
                    <p className="acara-date-year">2023</p>
                    <div className="acara-date-shape2">
                        <div></div>
                        <div></div>
                    </div>
                    <p className="acara-date-time">10.00 WIB</p>
                </div>
                <div id="acara-location"></div>
            </div>
        )
    }
}
export default Acara