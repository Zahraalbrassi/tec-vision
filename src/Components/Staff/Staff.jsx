import React, { useRef } from 'react'
import './Staff.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

function Staff() {
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
        <div className='staff'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForword} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackword} />
            <div className='slider'>
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Maram Ali</h3>
                                    <span>Engineer</span>
                                </div>
                            </div>
                            <p>   Maram is an experienced industrial engineer with a passion for optimizing processes and improving operational efficiency. With a strong background in engineering principles and project management, Nicolas excels at analyzing complex systems and implementing innovative solutions to drive productivity and cost savings.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Nicolas Rose</h3>
                                    <span>Engineer</span>
                                </div>
                            </div>
                            <p>   Nicolas is an experienced industrial engineer with a passion for optimizing processes and improving operational efficiency. With a strong background in engineering principles and project management, Nicolas excels at analyzing complex systems and implementing innovative solutions to drive productivity and cost savings.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Maram Ali</h3>
                                    <span>Engineer</span>
                                </div>
                            </div>
                            <p> Maram is an experienced industrial engineer with a passion for optimizing processes and improving operational efficiency. With a strong background in engineering principles and project management, Nicolas excels at analyzing complex systems and implementing innovative solutions to drive productivity and cost savings.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Nicolas Rose</h3>
                                    <span>Engineer</span>
                                </div>
                            </div>
                            <p>   Nicolas is an experienced industrial engineer with a passion for optimizing processes and improving operational efficiency. With a strong background in engineering principles and project management, Nicolas excels at analyzing complex systems and implementing innovative solutions to drive productivity and cost savings.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Staff