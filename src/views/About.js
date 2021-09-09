import React from 'react';

import Title from '../component/title';
// import { Container } from './styles';
// import './styles.scss';

const About = () => {
  return(
    <div className="inner">
  <Title lineContent='This is the' lineContent2='about page' />
  <div className="content">
    <p><div className="line-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laboriosam illum asperiores. Fugit molestiae hic quisquam dicta, ipsam assumenda nobis. Ab at esse velit facilis! Saepe amet debitis dolorem consequuntur.</div></p>
  </div>
  </div>
    );
}

export default About;