import React, { useState } from 'react'
import './Slider.css';
import BtnSlider from './BtnSlider';
import dataSlider from './dataSlider'

const Slider = (props) => {
    const [slideIndex, setSlideindex] = useState(1)

    const nextSlide = () => {
        if (slideIndex !== dataSlider.length) {
            setSlideindex(slideIndex + 1)
        }
        else if (slideIndex === dataSlider.length) {
            setSlideindex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideindex(slideIndex - 1)
        }
        else if (slideIndex === 1) {
            setSlideindex(dataSlider.length)
        }
    }
    const moveDot = index => {
        setSlideindex(index)
    }

    return (
        <div className="container_slider">
            {dataSlider.map((obj, index) => {


                return (

                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active_anim" : "slide"}>
                        <img src={process.env.PUBLIC_URL + `/imgs/img${index + 1}.jpg`} alt="logo" />
                    </div>

                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container_dots">
                {Array.from({ length: 5 }).map((item, index) => (

                    <div onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}>

                    </div>
                ))}

            </div>
        </div>
    )
}
export default Slider
