import React from 'react'
import './Program.css'
import { programsData } from '../../data/programsData'
import RightArrow from '../../assets/rightArrow.png'

const Programs = () => {
    const handleJoinNow = () => {
        scrollToJoin();
        // Add your logic here to handle the action when the user clicks "Join now"
    };
    const scrollToJoin = () => {
        const joinSection = document.getElementById('btn-join');

        if (joinSection) {
            joinSection.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="Programs" id='programs'>
            <div className="programs-header">
                <span className='stroke-text'>Explore Our </span>
                <span> Programs</span>
                <span className='stroke-text'> to shape you</span>
            </div>

            <div className="programs-categories">
                {programsData.map((program,index) => (
                    <div className="category" key={index}>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className="join-now" onClick={handleJoinNow}><span>Join Now</span><img src={RightArrow} alt="" /></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Programs