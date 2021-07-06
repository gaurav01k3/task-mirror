import React from 'react'
import "../CSS/ClassWrap.css"
import ClassBox from './ClassBox'

const ClassWrap = () => {
    return (
        <>
            <div className="class__container">
                <div className="class__header">
                    <h3>Free Lectures From 12th</h3>
                    <button>View more</button>
                </div>
                <div className="class__vidWrapper">
                    <ClassBox />
                    <ClassBox />
                    <ClassBox />
                    <ClassBox />
                </div>
            </div>
        </>
    )
}

export default ClassWrap
