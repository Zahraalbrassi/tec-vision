import React from 'react'
import './Hero.css'
import dark_arrow from '../../../assets/white-arrow.png'

function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>
                    TECHNNICAL VISION COMPANY

                </h1>
                <p> A LIBYAN COMPANY ESTABLISHED FOR THE PURPOSE OF SUPPLYING AND INSTALLING INDUSTRIAL EQUIPMENT OF ALL SIZES AND TYPES BY A GROUP OF EXPERIENCED ENGINEERS</p>
                <button className='btn'> Explor More <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero