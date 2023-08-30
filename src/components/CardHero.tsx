import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

import EmojiBar from './EmojiBar';
import Comment from './Comment';

export interface CardHeroProps {
  imgUrl: string;
  title: string;
  text: string;
  tag: string;
}

const Cardhero = ({ imgUrl, title, text, tag }: CardHeroProps): JSX.Element => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <Card
        sx={{
          maxWidth: 345,
          height: 300,
          ':hover': {
            boxShadow:
              'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
            transition: '0.5s',
          },
          borderRadius: '12px',
        }}
      >
        <CardMedia sx={{ height: 160 }} image={imgUrl} title={title} />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: '#1c1b1b', letterSpacing: '.2rem' }}
          >
            {title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {text}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {tag}
          </Typography>
        </CardContent>
      </Card>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <EmojiBar />
        <Comment />
      </div>
    </div>
  );
};

export default Cardhero;
