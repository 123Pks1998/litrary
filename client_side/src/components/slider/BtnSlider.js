import React from 'react';
import './Slider.css';
import arrowleft from '../icons/arrowleft.png';
import arrowright from '../icons/arrowright.png';

export default function BtnSlider({ direction, moveSlide }) {
    // console.log(direction,moveSlide);
    return (
        <button

            onClick={moveSlide}
            className={direction === "next" ? 'btn_slide next' : 'btn_slide prev'}>
            <img src={direction === "next" ? arrowright : arrowleft} alt="btn-alt" />

        </button>
    )

}





