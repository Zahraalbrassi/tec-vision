import React, { useState } from 'react';
import './LanguageToggle.css';

function LanguageToggle() {
    const [isEnglish, setIsEnglish] = useState(true);

    const handleToggle = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <div className="language-toggle">
            <button onClick={handleToggle} className={`toggle-button ${isEnglish ? 'active' : ''}`}>
                {isEnglish ? 'English' : 'العربية'}
            </button>
        </div>
    );
}

export default LanguageToggle;