import React from 'react';
import './Hero.css';
import Header from '../Header/Header';
import Heart from '../../assets/heart.png';
import hero_image from '../../assets/hero_image.png';
import hero_image_back from '../../assets/hero_image_back.png';
import Calories from '../../assets/calories.png';
import NumberCounter from './NumberCounter';
import { motion } from 'framer-motion';

const Hero = () => {
    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;

    const handleJoinNow = () => {
        scrollToJoin();
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
        <div className="hero" id='home'>
            <div className="blur hero-blur"></div>
            <div className="left-h">
                <Header />
                {mobile && (
                    <div className="the-best-ad">
                        <motion.div
                            initial={{ left: '178px' }}
                            whileInView={{ left: '8px' }}
                            transition={{ ...transition, type: 'tween' }}
                        ></motion.div>
                        <span>the best club in the town</span>
                    </div>
                )}

                <div className="hero-text">
                    <div>
                        <span className="stroke-text">Shape </span>
                        <span>Your</span>
                    </div>
                    <div>
                        <span>Ideal body</span>
                    </div>
                    <div>
                        <span>
                            IN HERE WE WILL HELP YOU TO SHAPE AND BUILD YOUR IDEAL BODY AND LIVE UP YOUR LIFE TO FULLEST
                        </span>
                    </div>
                </div>
                <div className="figures">
                    <div>
                        <span>
                            <NumberCounter start={100} end={140} stop={140} delay={4} prefix="+" />
                        </span>
                        <span>expert coaches</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={100} end={978} delay={4} preFix='+' />
                        </span>
                        <span>members joined</span>
                    </div>
                    <div>
                        <span>
                            <NumberCounter start={0} end={50} delay='4' preFix='+' />
                        </span>
                        <span>fitness programs</span>
                    </div>
                </div>
                <div className="hero-buttons">
                    <button className="btn">Get started</button>
                    <button className="btn">Learn More</button>
                </div>
            </div>
            <div className="right-h">
                <button className="btn" onClick={handleJoinNow}>Join Now</button>
                <motion.div
                    initial={{ right: '-1rem' }}
                    whileInView={{ right: '4rem' }}
                    transition={transition}
                    className='heart-rate'>
                    <img src={Heart} alt="" />
                    <span>Heart Rate</span>
                    <span>116 bpm</span>
                </motion.div>
                <img src={hero_image} alt="" className="hero-image" />
                <motion.img
                    initial={{ right: '11rem' }}
                    whileInView={{ right: '20rem' }}
                    transition={transition}
                    src={hero_image_back} alt="" className="hero-image-back" />

                <motion.div
                    initial={{ right: '37rem' }}
                    whileInView={{ right: '28rem' }}
                    transition={transition}
                    className="calories">
                    <img src={Calories} alt="" />
                    <span>Calories Burned</span>
                    <span>220 Kcal</span>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
