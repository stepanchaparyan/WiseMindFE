import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './AboutStyled';
// import { LINK } from '../../constants';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'About Us'}</WelcomeText>
          <LongText>{'About Us'}</LongText>
          {/* <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled> */}
          <a
            href="http://api.astutecarepathways.com/media/core_values_1.jpg"
            download="11111111.png"
          >
            <img
              src="http://api.astutecarepathways.com/media/core_values_1.jpg"
              alt="W3Schools"
              width="100"
              height="100"
            />
          </a>
          <a
            href="https://api.astutecarepathways.com/media/core_values_1.jpg"
            download="22222222222.png"
          >
            <img
              src="http://api.astutecarepathways.com/media/core_values_1.jpg"
              alt="W3Schools"
              width="100"
              height="100"
            />
          </a>
          <a href="/media/core_values_1.jpg" download="33333333333.png">
            <img
              src="http://api.astutecarepathways.com/media/core_values_1.jpg"
              alt="W3Schools"
              width="100"
              height="100"
            />
          </a>
          <a href="media/core_values_1.jpg" download="444444444.png">
            <img
              src="http://api.astutecarepathways.com/media/core_values_1.jpg"
              alt="W3Schools"
              width="100"
              height="100"
            />
          </a>
          <a href="https://www.w3schools.com/images/myw3schoolsimage.jpg" download>
            <img
              src="http://api.astutecarepathways.com/media/core_values_1.jpg"
              alt="W3Schools"
              width="100"
              height="100"
            />
          </a>
          <a href="https://www.w3schools.com/images/myw3schoolsimage.jpg" download target="_self">
            <img
              src="http://api.astutecarepathways.com/media/core_values_1.jpg"
              alt="W3Schools"
              width="100"
              height="100"
            />
          </a>
          <Link
            to="http://api.astutecarepathways.com/media/core_values_1.jpg"
            target="_blank"
            download
          >
            Download
          </Link>
          <Link to="/media/core_values_1.jpg" target="_blank" download>
            Download
          </Link>
          <Link to="http://54.151.11.251/media/big_logo.webp" target="_blank" download>
            Download
          </Link>
          <Link to="/media/big_logo.webp" target="_blank" download>
            Download
          </Link>
          <Link to="/media/core_values_1.jpg" target="_blank" download>
            Download
          </Link>
        </Module>
      </Container>
    </>
  );
};

export default About;
