import React from 'react'
import './Branches.css'
import program_1 from '../../assets/program-1.jpg'
import program_2 from '../../assets/program-2.jpg'
import program_3 from '../../assets/program-3.jpg'
import program_4 from '../../assets/program-4.jpg'
import program_5 from '../../assets/program-5.jpg'
import program_6 from '../../assets/program-6.jpg'
import program_7 from '../../assets/program-7.jpg'
import program_8 from '../../assets/program-8.jpg'
import program_9 from '../../assets/program-9.jpg'

function Branches() {

    return (


        <div className='Branches'>
            <div className="Branche">
                <img src={program_1} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_1} alt="" /> */}
                    <h6>Concrete Mixers</h6>
                    <p> We provide mobile and fixed concrete mixers with computer warranty and maintenance</p>
                </div>

            </div>

            <div className="Branche">

                <img src={program_2} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_2} alt="" /> */}
                    <h6>Metallic Structures</h6>
                    <p> Construction of exposed and covered metal structures inside and outside cities</p>
                </div>
            </div>
            <div className="Branche">

                <img src={program_3} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h6>Water Pumps</h6>
                    <p> We provide desalination plants of all sizes and production plants</p>
                </div>
            </div>
            <div className="Branche">

                <img src={program_5} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h6>Fire Extinguishing Systems </h6>
                    <p> Fire extinguishing systems, central air conditioning systems, hygiene equipment and personal protection and surveillance systems</p>
                </div>
            </div>
            <div className="Branche">

                <img src={program_6} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h6>Waste Recycling</h6>
                    <p> We provide recycling plants (rubber / glass / plastic) with different capacities with guarantee periods.</p>
                </div>
            </div>
            <div className="Branche">

                <img src={program_7} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h6>Concrete Block Factories</h6>
                    <p> We provide automated block factories that help you save time and increase productivity</p>
                </div>

            </div>
            <div className="Branche">

                <img src={program_8} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h6>Prefabricated Houses
                    </h6>
                    <p> WWe provide prefabricated housing and mobile offices according to the desired design or design, anywhere in Libya</p>
                </div>

            </div>
            <div className="Branche">

                <img src={program_9} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h6>Ground Floor</h6>
                    <p>We provide ground scales for trucks</p>
                </div>

            </div>

            <div className="Branche">

                <img src={program_4} alt="" />
                <div className="caption">
                    {/* <img src={program_icon_3} alt="" /> */}
                    <h6>  Cranes and Gantries</h6>
                    <p> We provide all types of cranes, overhead cranes and engines</p>
                </div>

            </div>
        </div>

    )
}

export default Branches