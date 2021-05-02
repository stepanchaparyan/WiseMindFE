import React from 'react';
import { Container, Module, WelcomeText, LongText, LinkStyled } from './AboutStyled';
import { LINK } from '../../constants';
import { Link as DownLoadLink } from 'react-router-dom';

const About = () => {
  return (
    <>
      <Container>
        <Module>
          <WelcomeText>{'About Us'}</WelcomeText>
          <LongText>{'About Us'}</LongText>
          <LinkStyled to={LINK.TO.HOME}>{'GO HOME'}</LinkStyled>
          <DownLoadLink to="src/assets/test.pdf" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="./test.pdf" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="test.pdf" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="./test.jpg" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="test.jpg" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="/usr/share/nginx/html/src/assets/test.pdf" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="/usr/share/nginx/html/src/assets/test.jpg" download>
            Download
          </DownLoadLink>
        </Module>
      </Container>
    </>
  );
};

export default About;
