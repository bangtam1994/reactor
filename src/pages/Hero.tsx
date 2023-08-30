import React, { useEffect, useState } from 'react';

import Cardhero from '../components/CardHero';
import data from '../data.json';
import { Container } from '@mui/material';

const Hero = () => {
  const [post, setPost] = useState(data);

  return (
    <Container>
      <div className="flex flex-col text-center gap-[15px] md:w-[600px]">
        <h1 className="font-bold text-2xl md:text-4xl">
          Get Connected to the Best Remote Jobs in Your Field
        </h1>
        <p className="font-semibold text-slate-500 mb-[40px]">
          Discover a wide range of remote opportunities on our platform and take
          control of your career
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h1 className="font-semibold text-slate-600">Featured Jobs</h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '42px',
          }}
        >
          {post.map((card, index) => {
            const { imgUrl, title, text, tag } = card;
            return (
              <Cardhero
                imgUrl={imgUrl}
                title={title}
                text={text}
                tag={tag}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Hero;
