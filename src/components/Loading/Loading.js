import React from 'react';
import { LoadingStyled } from './LoadingStyled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';

const Loading = () => {
  return (
    <>
      <LoadingStyled top={-350}>
        <Loader type="ThreeDots" color="#1996cd" height={80} width={80} />
      </LoadingStyled>
      <LoadingStyled top={-40}>
        <Loader type="ThreeDots" color="#1996cd" height={80} width={80} />
      </LoadingStyled>
      <LoadingStyled top={+250}>
        <Loader type="ThreeDots" color="#1996cd" height={80} width={80} />
      </LoadingStyled>
    </>
  );
};

export default Loading;
