import React from 'react';
import './Css/Slider.css';
import imgBanner1 from '../img/pag_Inicial/1.png'
import imgBanner2 from '../img/pag_Inicial/2.png'
import imgBanner3 from '../img/pag_Inicial/3.png'
import imgBanner4 from '../img/pag_Inicial/4.png'

const Slider = () => {
    return (
        <>
            <div className="slider">
                <ul>
                    <li>
                        <img src={imgBanner1} alt="imgBanner1" />
                    </li>

                    <li>
                        <img src={imgBanner2} alt="imgBanner2" />
                    </li>
                    <li>
                        <img src={imgBanner3} alt="imgBanner3" />
                    </li>
                    <li>
                        <img src={imgBanner4} alt="imgBanner4" />
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Slider;
