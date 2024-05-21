import React from 'react';

import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay flex__center'>
      <img src={images.G} alt="G letter" srcset="" />
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>About Us</h1>
        <img src={images.spoon} alt="About_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Possimus, A Unde Enim Magni Alias Accusamus Nisi Adipisci Nihil Natus Quis Nesciunt! Nam Quaerat Dignissimos Minima Rerum, Natus Laudantium Voluptates.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about_knife" srcset="" />
      </div>
      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>Our History</h1>
        <img src={images.spoon} alt="About_spoon" className='spoon__img' />
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Possimus, A Unde Enim Magni Alias Accusamus Nisi Adipisci Nihil Natus Quis Nesciunt! Nam Quaerat Dignissimos Minima Rerum, Natus Laudantium Voluptates.</p>
        <button type="button" className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
