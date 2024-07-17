import React, { useRef } from 'react'
import './Services.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_4 from '../../assets/program-4.jpg'
import program_5 from '../../assets/program-5.jpg'
import program_6 from '../../assets/program-6.jpg'
import program_7 from '../../assets/program-7.jpg'
import program_8 from '../../assets/program-8.jpg'
import program_9 from '../../assets/program-9.jpg'
function Services() {
    const slider = useRef();
    let tx = 0;
    const slideForword = () => {
        if (tx > -50) {
            tx -= 20;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackword = () => {
        if (tx < 0) {
            tx += 30;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }
    return (
        <div className='servieces'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForword} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackword} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_1} alt="" className='serv-img' />

                            </div> <h6>Concrete Mixers</h6>
                            <p> We provide mobile and fixed concrete mixers with computer warranty and maintenance</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_2} className='serv-img' alt='serv-img' />

                            </div>
                            <h6>Metallic Structures</h6>
                            <p> Construction of exposed and covered metal structures inside and outside cities</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_3} className='serv-img' alt='serv-img' />

                            </div>
                            <h6>Water Pumps</h6>
                            <p> We provide desalination plants of all sizes and production plants</p>
                        </div>
                    </li>

                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_4} className='serv-img' alt='serv-img' />

                            </div>  <h6>  Cranes and Gantries</h6>
                            <p> We provide all types of cranes, overhead cranes and engines</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_5} className='serv-img' alt='serv-img' />

                            </div>
                            <h6>Fire Extinguishing Systems </h6>
                            <p> Fire extinguishing systems, central air conditioning systems, hygiene equipment and personal protection and surveillance systems</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_6} className='serv-img' alt='serv-img' />

                            </div>
                            <h6>Waste Recycling</h6>
                            <p> We provide recycling plants (rubber / glass / plastic) with different capacities with guarantee periods.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_7} className='serv-img' alt='serv-img' />
                            </div>
                            <h6>Concrete Block Factories</h6>
                            <p> We provide automated block factories that help you save time and increase productivity</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_8} className='serv-img' alt='serv-img' />

                            </div>
                            <h6>Prefabricated Houses
                            </h6>
                            <p> WWe provide prefabricated housing and mobile offices according to the desired design or design, anywhere in Libya</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide-serv">
                            <div className="serv-info">
                                <img src={program_9} className='serv-img' alt='serv-img' />

                            </div>
                            <h6>Ground Floor</h6>
                            <p>We provide ground scales for trucks</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}
export default Services