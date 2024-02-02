"use client"

import React, { useEffect, useState } from 'react';

const AnimatedText = () => {
    const initialTexts = ['University', 'Campus Life', 'Education'];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [currentText, setCurrentText] = useState(initialTexts[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentText(initialTexts[currentTextIndex]);
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % initialTexts.length);
        }, 3000); // Change the duration (in milliseconds) as needed

        return () => clearInterval(interval);
    }, [currentTextIndex]);

    return <p className="text-xl">{currentText}</p>;
};

const AuthRightSideBar = () => {
    return (
        <div className="bg-orange h-screen flex flex-col justify-center items-center">
            <div>
                <p className="text-xl">Give Your</p>
                <p className="text-3xl">Feedback</p>
                <AnimatedText />
            </div>
        </div>
    );
};

export default AuthRightSideBar;
