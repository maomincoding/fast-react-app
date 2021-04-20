import React, { useEffect } from 'react';
import { Tit } from './style';

const About = () => {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <div>
      <Tit>This is the About page</Tit>
    </div>
  );
};
export default About;
