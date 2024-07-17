import React, { useEffect, useState } from 'react';
import './Title.css';

function Title(props) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const titleElement = document.getElementById(props.id);
            if (titleElement) {
                const titleRect = titleElement.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                if (titleRect.top < windowHeight * 0.75) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [props.id]);

    return (
        <div className={`title ${isVisible ? 'visible' : ''}`} id={props.id}>
            <h2>{props.title}</h2>
            <p>{props.subtitle}</p>
        </div>
    );
}

export default Title;