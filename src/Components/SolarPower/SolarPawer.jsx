import React, { useState } from 'react';
import './SolarPower.css';

import white from '../../assets/white-arrow.png';
import { solarPowerData } from '../../data';

function SolarPawer() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className="solar-power">
            {solarPowerData.slice(0, 3).map((program, index) => (
                <div key={index} className="solar-pow">
                    <img src={program.imageSource} alt="" />
                    <div className="caption">
                        <h6>{program.title}</h6>
                        <p>{program.description}</p>
                    </div>
                </div>
            ))}

            {showMore && (
                <div className="solar-power-expanded">
                    {solarPowerData.slice(3).map((program, index) => (
                        <div key={index} className="solar-pow">
                            <img src={program.imageSource} alt="" />
                            <div className="caption">
                                <h6>{program.title}</h6>
                                <p>{program.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="solar-btn">
                <button className="btn dark-btn" onClick={toggleShowMore}>
                    {showMore ? 'See less' : 'See more'}
                    <img src={white} alt="" />
                </button>
            </div>
        </div>
    );
}

export default SolarPawer;