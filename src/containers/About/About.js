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
          {/* <DownLoadLink to="src/assets/test.pdf" target="_blank" download>
            Download
          </DownLoadLink>
          <DownLoadLink to="/media/core_values_2.jpg" target="_blank" download="test.jpg">
            Download ee
          </DownLoadLink>
          <a href="/media/core_values_2.jpg" download="w3logo.jpg">
            XXXXXXXXXXXXX
          </a>

          <a href="/media/core_values_2.jpg" download>
            XXXXXXXXXXXXX
          </a>

          <a
            href="http://api.astutecarepathways.com/media/core_values_1.jpg"
            download="11111111.jpg"
          >
            aaaaaaaa
          </a>

          <a
            href="https://api.astutecarepathways.com/media/core_values_1.jpg"
            download="11111111.jpg"
          >
            dddddddd
          </a>

          <a href="http://api.astutecarepathways.com/media/core_values_1.jpg" download>
            bbbbbbbbb
          </a>

          <DownLoadLink to="/media/core_values_2.jpg" target="_blank" download>
            Download ee
          </DownLoadLink>
          <DownLoadLink to="../src/test.jpg" target="_blank" download="test.jpg">
            Download 1
          </DownLoadLink> */}
        </Module>
      </Container>
    </>
  );
};

export default About;
