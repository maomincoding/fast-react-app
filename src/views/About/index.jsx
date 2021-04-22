import React, { useEffect } from 'react';
import { Tit } from './style';

const About = () => {
  useEffect(() => {
    document.title = 'About';
  }, []);
  return (
    <div>
      <Tit>GitHub:https://github.com/maomincoding/fast-react-app.git</Tit>
    </div>
  );
};
export default About;
