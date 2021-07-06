import React from 'react'
import "../CSS/ClassBox.css";
import ReactPlayer from 'react-player/youtube';

const ClassBox = () => {
    return (
        <>
            <div className="class_box">
                <div className="class__player">
                    <ReactPlayer controls width='250px' height='200px' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
                <div className="class_boxText">
                    Chapter-1
                </div>
            </div>
        </>
    )
}

export default ClassBox
