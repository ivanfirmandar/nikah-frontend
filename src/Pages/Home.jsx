import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import Title from "../Components/Title";
import Quran from "../Components/Quran";
import Sign from "../Components/Sign";
import Kami from "../Components/Kami"
import Acara from "../Components/Acara";
import Floater from "../Components/Floater";
import './Home.css'

class Home extends React.Component{
    constructor(props){
        super(props)
        AOS.init()
    }
    render(){
        return(
            <div>
            <Floater />
            <div id="container" style={{
                                }}>
                <div id="theme-bg">
                </div>
                <div id="main">
                    <Title />
                </div>
                <div id="quran">
                    <Quran />
                </div>
                <div id="kami">
                    <Sign name='kami'/>
                    <Kami />
                </div>
                <div id="acara">
                    <Sign name='acara'/>
                    <Acara />
                </div>
                <div id="konspirasi">
                    Konspirasi
                </div>
                <div id="tunangan">
                    Tunangan
                </div>
                <div id="pesan">
                    Pesan
                </div>
            </div>
            </div>
        )
    }
}

export default Home