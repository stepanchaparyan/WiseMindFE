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
          <DownLoadLink
            to="http://api.astutecarepathways.com/media/core_values_2.jpg"
            target="_blank"
            download
          >
            Download e
          </DownLoadLink>
          <DownLoadLink to="/media/core_values_2.jpg" target="_blank" download>
            Download ee
          </DownLoadLink>
          <DownLoadLink to="../test.pdf" target="_blank" download="test.pdf">
            Download
          </DownLoadLink>
          <DownLoadLink to="../src/test.jpg" target="_blank" download="test.jpg">
            Download
          </DownLoadLink>
          <DownLoadLink to="../src/test.jpg" target="_blank" download="test.jpg">
            Download 1
          </DownLoadLink>
        </Module>
      </Container>
    </>
  );
};

export default About;
