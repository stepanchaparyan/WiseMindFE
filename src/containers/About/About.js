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
          <DownLoadLink to="src/assets/test.pdf" target="_blank" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="./test.pdf" target="_blank" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="test.pdf" target="_blank" download>
            Download
          </DownLoadLink>
        </Module>
      </Container>
    </>
  );
};

export default About;
