
import React from "react";
import './Kami.css'
import FotoIvan from '../Images/gambar1.JPG'
import Socmed from "./Socmed";

class Kami extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="kami-container">
               <div id="kami-groom" 
               data-aos='fade-up-left'
               >
                    <img className="kami-foto" src={FotoIvan} alt="" />
                    <div>
                    <h3>Belladinna Afnan</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut qui doloribus laborum provident laboriosam impedit non! Dolores ea, aut, quis quibusdam est delectus minima sed perspiciatis vero obcaecati esse at?</p>
                        <Socmed />
                    </div>
               </div>
               <div id="kami-bride" data-aos='fade-up-right'>
                    <div>
                    <img className="kami-foto" src={FotoIvan} alt="" />
                    <h3>Ivan Firmanda</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut qui doloribus laborum provident laboriosam impedit non! Dolores ea, aut, quis quibusdam est delectus minima sed perspiciatis vero obcaecati esse at?</p>
                    <Socmed />
                    </div>
               </div>
            </div>
        )
    }
}
export default Kami