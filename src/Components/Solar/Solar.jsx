import React from 'react'
import './Solar.css'
import gallery_1 from '../../assets/gallery-1.png'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import white from '../../assets/white-arrow.png'



function Solar() {
    return (
        <div className='solar' id='solar'>
            <div className="gallery">
                <img src={gallery_1} alt="" />
                <img src={gallery_2} alt="" />
                <img src={gallery_3} alt="" />
                <img src={gallery_4} alt="" />

            </div>
            <button className='btn dark-btn'>see more here <img src={white} alt="" /></button>
        </div>
    )
}

export default Solar