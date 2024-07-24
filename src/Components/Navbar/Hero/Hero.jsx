import React from 'react'
import './Hero.css'
import dark_arrow from '../../../assets/white-arrow.png'
import { Link } from 'react-scroll';

function Hero() {
    return (
        <div className='hero container'>
            <div className="hero-text">
                <h1>
                    TECHNNICAL VISION COMPANY

                </h1>
                <p> A LIBYAN COMPANY ESTABLISHED FOR THE PURPOSE OF SUPPLYING AND INSTALLING INDUSTRIAL EQUIPMENT OF ALL SIZES AND TYPES BY A GROUP OF EXPERIENCED ENGINEERS</p>
                <button className='btn'><Link to='servieces' smooth={true} offset={-260} duration={500}> Explor More</Link> <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}

export default Hero