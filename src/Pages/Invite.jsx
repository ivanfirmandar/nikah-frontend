import React from "react";
import Gift from "../Components/Gift";
import One from "../Images/assets/1x/1.png";
import Two from "../Images/assets/1x/2.png";
import Three from "../Images/assets/1x/3.png";
import Four from "../Images/assets/1x/4.png";
import Five from "../Images/assets/1x/5.png";
import Six from "../Images/assets/1x/6.png";
import Arrum from "../Images/assets/1x/arrum.png";
import UsImg from "../Images/assets/1x/us.png";
import BackgroundImg from "../Images/bg-01.jpg";
import Assalam from "../Images/assets/1x/salam.png";
import Ivan from "../Images/assets/1x/ivan.png"
import Ands from "../Images/assets/1x/and.png"
import Adin from "../Images/assets/1x/adin.png";
import Save from "../Images/assets/1x/save.png";
import Time from "../Images/assets/1x/waktu.png";
import Place from "../Images/assets/1x/ndalem.png";
import Akad from "../Images/assets/1x/tg akad.png";
import Places from "../Images/assets/1x/alamat.png";
import Resepsi from "../Images/assets/1x/tg resep.png";
import Story from "../Images/assets/1x/kisah.png";
import Sampang from "../Images/assets/1x/sampang.png";
import Sambat from "../Images/assets/1x/sambat.png";
import Akhsa from "../Images/assets/1x/aksha.png";
import Propos from "../Images/assets/1x/propos.png";
import Floater from "../Components/Floater";
import Harapan from "../Components/Harapan";
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./Invite.css";

class Invite extends React.Component{
    constructor(props){
        super(props);
        AOS.init()

        this.countdown();
    }
    toMaps(){
        window.location = 'https://maps.app.goo.gl/ZwvTdztkSde8UXny8'
    }
    openGift(){
        document.getElementById('giftandblack').style.display = "block"
    }
    countdown(){
        var countDownDate = new Date("Dec 3, 2023 10:00:00").getTime();
        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            // console.log(days, hours, minutes,seconds);
            let date = document.getElementsByClassName("date")
            date[0].innerHTML = days
            date[1].innerHTML = hours
            date[2].innerHTML = minutes
            date[3].innerHTML = seconds
            // If the count down is finished, write some text
            // if (distance < 0) {
            //     clearInterval(x);
            //     document.getElementById("demo").innerHTML = "EXPIRED";
            // }
        }, 1000);
    }
    render(){
        return(
            <div>
            <div id="obj-cont">
                <Gift id="giftCard"/>
                <Floater />
                <img className="objects" src={One} alt="" id="One"/>
                <img className="objects" src={Two} alt="" id="Two"/>
                <img className="objects" src={Three} alt="" id="Three"/>
                <img className="objects" src={Four} alt="" id="Four"/>
                <img className="objects" src={Five} alt="" id="Five"/>
                <img className="objects" src={Six} alt="" id="Six"/>
                <img className="objects" data-aos='fade-up-right' src={Arrum} alt="" id="arrum"/>
                <img className="objects" data-aos='fade-up-right' src={UsImg} alt="" id="usImg"/>
                <img className="objects" data-aos='fade-up-right' src={Assalam} alt="" id="Assalam"/>
                <img className="objects" data-aos='fade-up-right' src={Ivan} alt="" id="Ivan"/>
                <img className="objects" data-aos='fade-up-right' src={Ands} alt="" id="Ands"/>
                <img className="objects" data-aos='fade-up-right' src={Adin} alt="" id="Adin"/>
                <img className="objects" data-aos='fade-up-right' src={Save} alt="" id="Save"/>
                <img className="objects" data-aos='fade-up-right' src={Time} alt="" id="Time"/>
                <div className="objects" id="dates" data-aos='fade-up-right'>
                    <b className="date" id="days">2</b>
                    <b className="date" id="hours">3</b>
                    <b className="date" id="minutes">4</b>
                    <b className="date" id="seconds">5</b>
                </div>
                <img className="objects" data-aos='fade-up-right' src={Place} alt="" id="Place"/>
                <img className="objects" data-aos='fade-up-right' src={Akad} alt="" id="Akad"/>
                <img className="objects" data-aos='fade-up-right' src={Resepsi} alt="" id="Resepsi"/>
                <img className="objects" data-aos='fade-up-right' src={Places} alt="" id="Places"/>
                <button type="button" id="maps" class="btn btn-dark objects" data-aos='fade-up-right' onClick={this.toMaps} ><img width="50" height="50" src="https://img.icons8.com/ios/50/marker--v1.png" alt="marker--v1"/><b>Google Maps</b></button>
                <button id="gift" onClick={this.openGift}></button>
                {/* <img className="objects" data-aos='fade-up-right' src={Story} alt="" id="Story"/> */}
                <img className="objects" data-aos='fade-up-right' src={Sambat} alt="" id="Sambat"/>
                <img className="objects" data-aos='fade-up-right' src={Akhsa} alt="" id="Akhsa"/>
                <img className="objects" data-aos='fade-up-right' src={Propos} alt="" id="Propos"/>
                <img className="objects" data-aos='fade-up-right' src={Sampang} alt="" id="Sampang"/>
                <Harapan />
            </div>
            <div id="inv-bg">
                <img src={BackgroundImg} alt="" />
            </div>
            </div>
        )
    }
}

export default Invite;