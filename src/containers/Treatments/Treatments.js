import React, { useEffect, useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import customObject from '../../util/propTypes';
import { getTreatmentsTexts } from '../../redux/actions/treatmentsTextsActions';
import Loading from '../../components/Loading/Loading';
import {
  loadingSelector,
  errorSelector,
  allTreatmentsTextsSelector,
  individualPsychotherapySelector,
  groupTherapySelector
} from '../../redux/selectors/treatmentsTextsSelector';
import {
  Container,
  Context,
  MainText,
  TitleContainer,
  Title,
  LogoContainer,
  Logo,
  MyAccordion,
  GroupTherapyTexts
} from './TreatmentsStyled';
import CustomModal from '../../components/Modal/Modal';
import logo from '../../assets/logo.png';

const logoAlt = 'logoAlt';

const Treatments = ({
  treatmentsTexts,
  individualPsychotherapy,
  groupTherapy,
  loading,
  error,
  language
}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTreatmentsTexts(language.toLowerCase()));
  }, [dispatch, language]);

  const [modalIsOpen, setCloseModal] = useState(!error);
  const handleCloseErrorModal = () => {
    setCloseModal(false);
  };

  console.log(groupTherapy);

  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : !error ? (
        <>
          {treatmentsTexts.length > 0 && (
            <Container>
              <TitleContainer>
                <LogoContainer>
                  <Logo src={logo} alt={logoAlt}></Logo>
                </LogoContainer>
                <Title>{individualPsychotherapy.parent_section.toUpperCase()}</Title>
              </TitleContainer>
              <Context>
                <MyAccordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{individualPsychotherapy?.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <MainText>{individualPsychotherapy?.content}</MainText>
                    </AccordionItemPanel>
                  </AccordionItem>
                </MyAccordion>
                <MyAccordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{groupTherapy[0]?.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {!!groupTherapy.length &&
                        groupTherapy?.map((item, i) => (
                          <GroupTherapyTexts index={i} key={item.content}>
                            {item?.content}
                          </GroupTherapyTexts>
                        ))}
                    </AccordionItemPanel>
                  </AccordionItem>
                </MyAccordion>
              </Context>
            </Container>
          )}
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

Treatments.propTypes = {
  language: PropTypes.string.isRequired,
  treatmentsTexts: PropTypes.arrayOf(customObject),
  groupTherapy: PropTypes.arrayOf(customObject),
  individualPsychotherapy: customObject,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.object
};

Treatments.defaultProps = {
  error: null
};

const mapStateToProps = state => {
  return {
    loading: loadingSelector(state),
    error: errorSelector(state),
    treatmentsTexts: allTreatmentsTextsSelector(state),
    individualPsychotherapy: individualPsychotherapySelector(state),
    groupTherapy: groupTherapySelector(state)
  };
};

export default connect(mapStateToProps)(Treatments);
