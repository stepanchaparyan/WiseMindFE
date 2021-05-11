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
          <a
            href="https://bucketforfavorites.s3.eu-north-1.amazonaws.com/test.pdf"
            download="test.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download
          </a>
        </Module>
      </Container>
    </>
  );
};

export default About;
