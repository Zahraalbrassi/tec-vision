import React from 'react'
import './About.css'
import Solar_img from '../../assets/Solar_img.jpg'
import play_icon from '../../assets/play-icon2.png'
function About({ setPlayState }) {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={Solar_img} className='about-img' />
                <img src={play_icon} className='play-icon' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h2>Solar Power</h2>
                {/* <h2>somthing</h2> */}
                <p>It's the modern and renewable energy and the alternative and safe for electricity .. Long-term effectiveness and not affected by the ongoing power cuts.</p>
            </div>
        </div>
    )
}

export default About