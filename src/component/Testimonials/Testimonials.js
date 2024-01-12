import React, { useState } from 'react';
import './Testimonials.css';
import { testimonialsData } from '../../data/testimonialsData';
import leftArrow from '../../assets/leftArrow.png';
import RightArrow from '../../assets/rightArrow.png';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const tLength = testimonialsData.length;

  return (
    <div className="Testimonials" id='testimonials'>
      <div className="left-t">
        <span>Testimonials</span>
        <span className='stroke-text'>What they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span style={{ color: 'var(--orange)' }}>
          {testimonialsData[selected].name}
        </span>{" "}
        - {testimonialsData[selected].status}
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
          style={{ width: 'auto' }}
        />
        <div className="arrows">
          <motion.img
            onClick={() => {
              setSelected(selected === 0 ? tLength - 1 : selected - 1);
            }}
            src={leftArrow}
            alt=""
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={transition}
          />
          <motion.img
            onClick={() => {
              setSelected(selected === tLength - 1 ? 0 : selected + 1);
            }}
            src={RightArrow}
            alt=""
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={transition}
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
