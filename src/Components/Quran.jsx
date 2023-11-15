import React from "react";
import './Quran.css'
import gunungan from '../Images/1x/Asset 2.png'

class Quran extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="quran-container">
                <h2 id="quran-text">وَمِنْ ءَايَٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا۟ إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَءَايَٰتٍ لِّقَوْمٍ يَتَفَكَّرُونَ</h2>
                <p id="quran-translate">"Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berfikir"<b> | Ar-Rum 21</b></p>
                
            </div>
        )
    }
}
export default Quran