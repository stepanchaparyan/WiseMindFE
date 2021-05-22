import React from 'react';
import { Container, Module } from './ClientResourcesStyled';

const ClientResources = () => {
  return (
    <Container>
      <Module>
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
  );
};

export default ClientResources;
