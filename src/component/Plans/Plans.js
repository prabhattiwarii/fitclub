import React from 'react';
import './Plans.css';
import { plansData } from '../../data/plansData';
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
    const handleJoinNow = (planName) => {
        console.log(`Join now clicked for ${planName}`);
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
        <div className="plans-container" id="plans">
            <div className="blur plans-blur-1"></div>
            <div className="blur plans-blur-2"></div>
            <div className="programs-header" style={{ gap: '2rem' }}>
                <span className="stroke-text">READY TO START</span>
                <span>YOUR JOURNEY</span>
                <span className="stroke-text">NOW WITH US</span>
            </div>

            <div className="plans">
                {plansData.map((plan, i) => (
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span> $ {plan.price}</span>

                        <div className="features">
                            {plan.features.map((feature, i) => (
                                <div className="feature" key={i}>
                                    <img src={whiteTick} alt="" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div>
                            <span>See more benefits </span>
                        </div>
                        <button className="btn" onClick={() => handleJoinNow(plan.name)}>
                            Join now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Plans;
