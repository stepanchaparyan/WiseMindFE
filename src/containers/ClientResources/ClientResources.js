import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { Container, Resource } from './ClientResourcesStyled';
import PropTypes from 'prop-types';
import customObject from '../../util/propTypes';
import { getClientResources } from '../../redux/actions/clientResourcesActions';
import Loading from '../../components/Loading/Loading';
import {
  loadingSelector,
  errorSelector,
  resourcesSelector
} from '../../redux/selectors/clientResourcesSelector';
import CustomModal from '../../components/Modal/Modal';

const ClientResources = ({ resources, loading, error, language }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClientResources(language.toLowerCase()));
  }, [dispatch, language]);

  const [modalIsOpen, setCloseModal] = useState(!error);
  const handleCloseErrorModal = () => {
    setCloseModal(false);
  };

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : !error ? (
        <>
          <Container>
            <Resource href={resources[0]?.url} target="_blank" rel="noreferrer">
              {resources[0]?.title}
            </Resource>
          </Container>
        </>
      ) : (
        <CustomModal
          modalIsOpen={modalIsOpen}
          onConfirm={handleCloseErrorModal}
          title="Error"
          text="Something went wrong, please try later"
          buttonConfirmText="OK"
          titleBgColor="gray"
          isBigSize
          shouldShowFooter
        ></CustomModal>
      )}
    </>
  );
};

ClientResources.propTypes = {
  language: PropTypes.string.isRequired,
  resources: PropTypes.arrayOf(customObject),
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

ClientResources.defaultProps = {
  error: null
};

const mapStateToProps = state => {
  return {
    loading: loadingSelector(state),
    error: errorSelector(state),
    resources: resourcesSelector(state)
  };
};

export default connect(mapStateToProps)(ClientResources);
