import React from 'react'
import "../CSS/Achievement.css";
import AchievementBox from './AchievementBox';

const Achievement = () => {
    return (
        <>
            <div className="achieve">
                <div className="achieve__wrapper">
                    <AchievementBox />
                    <AchievementBox />
                    <AchievementBox />
                </div>
            </div>
        </>
    )
}

export default Achievement
