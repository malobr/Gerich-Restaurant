import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>  
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef img" srcset="" />
    </div>

    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we belive in</h1>
    
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote img" srcset="" />
          <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.  </p>
        </div>
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Possimus, A Unde Enim Magni Alias Accusamus Nisi Adipisci Nihil Natus Quis Nesciunt! Nam Quaerat Dignissimos Minima Rerum, Natus Laudantium Voluptates.</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt="sign img" srcset="" />
      </div>
    </div>
  </div>
);

export default Chef;
