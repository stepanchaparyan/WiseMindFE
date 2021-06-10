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
  groupTherapySelector,
  parentingSkillsSelector,
  substanceAbuseDualDiagnosesCounsellingSelector,
  adjustmentIssuesLifeTransitionsSelector,
  psychAssessmentsSelector
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
  GroupTherapyTexts,
  ParentingSkillsTexts,
  ParentingSkillsTextsLi,
  ParentingSkillsTextsSpan,
  PsychAssessmentsText
} from './TreatmentsStyled';
import CustomModal from '../../components/Modal/Modal';
import logo from '../../assets/logo.png';

const logoAlt = 'logoAlt';

const Treatments = ({
  treatmentsTexts,
  individualPsychotherapy,
  substanceAbuseDualDiagnosesCounselling,
  adjustmentIssuesLifeTransition,
  groupTherapy,
  parentingSkills,
  psychAssessments,
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

  const splitAndJoinByDot = text => {
    return text
      .split('.')
      .filter((item, i) => i !== 0)
      .join('.');
  };

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
                      <AccordionItemButton>
                        {substanceAbuseDualDiagnosesCounselling?.title}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <MainText>{substanceAbuseDualDiagnosesCounselling?.content}</MainText>
                    </AccordionItemPanel>
                  </AccordionItem>
                </MyAccordion>

                <MyAccordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>
                        {adjustmentIssuesLifeTransition[0]?.section}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      {!!adjustmentIssuesLifeTransition.length &&
                        adjustmentIssuesLifeTransition?.map((item, i) => (
                          <MainText index={i} key={item.content}>
                            {item?.content}
                          </MainText>
                        ))}
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

                <MyAccordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{parentingSkills[0]?.title}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <ParentingSkillsTexts>{parentingSkills[0]?.content}</ParentingSkillsTexts>
                      <ParentingSkillsTexts>{parentingSkills[1]?.content}</ParentingSkillsTexts>
                      <ParentingSkillsTexts>{parentingSkills[2]?.content}</ParentingSkillsTexts>
                      <ParentingSkillsTextsLi>{parentingSkills[3]?.content}</ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>{parentingSkills[4]?.content}</ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>{parentingSkills[5]?.content}</ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>{parentingSkills[6]?.content}</ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>{parentingSkills[7]?.content}</ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>{parentingSkills[8]?.content}</ParentingSkillsTextsLi>
                      <ParentingSkillsTexts isBold isMargin>
                        {parentingSkills[9]?.content}
                      </ParentingSkillsTexts>
                      <ParentingSkillsTexts>{parentingSkills[10]?.content}</ParentingSkillsTexts>
                      <ParentingSkillsTextsLi>
                        {parentingSkills[11]?.content}
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>
                        {parentingSkills[12]?.content}
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>
                        {parentingSkills[13]?.content}
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>
                        {parentingSkills[14]?.content}
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>
                        {parentingSkills[15]?.content}
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>
                        {parentingSkills[16]?.content}
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi>
                        {parentingSkills[17]?.content}
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTexts>{parentingSkills[18]?.content}</ParentingSkillsTexts>
                      <ParentingSkillsTextsLi isBold>
                        {parentingSkills[19]?.content.split('.')[0]}.
                        <ParentingSkillsTextsSpan>
                          {splitAndJoinByDot(parentingSkills[19]?.content)}
                        </ParentingSkillsTextsSpan>
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi isBold>
                        {parentingSkills[20]?.content.split('.')[0]}.
                        <ParentingSkillsTextsSpan>
                          {splitAndJoinByDot(parentingSkills[20]?.content)}
                        </ParentingSkillsTextsSpan>
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi isBold>
                        {parentingSkills[21]?.content.split('.')[0]}.
                        <ParentingSkillsTextsSpan>
                          {splitAndJoinByDot(parentingSkills[21]?.content)}
                        </ParentingSkillsTextsSpan>
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTextsLi isBold>
                        {parentingSkills[22]?.content.split('.')[0]}.
                        <ParentingSkillsTextsSpan>
                          {splitAndJoinByDot(parentingSkills[22]?.content)}
                        </ParentingSkillsTextsSpan>
                      </ParentingSkillsTextsLi>
                      <ParentingSkillsTexts>{parentingSkills[23]?.content}</ParentingSkillsTexts>
                    </AccordionItemPanel>
                  </AccordionItem>
                </MyAccordion>

                <MyAccordion allowZeroExpanded>
                  <AccordionItem>
                    <AccordionItemHeading>
                      <AccordionItemButton>{psychAssessments[0]?.section}</AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <PsychAssessmentsText isBold isInline>
                        {psychAssessments[0]?.content}&nbsp;
                      </PsychAssessmentsText>
                      <PsychAssessmentsText isGray isInline>
                        {psychAssessments[1]?.content}
                      </PsychAssessmentsText>
                      <PsychAssessmentsText>{psychAssessments[2]?.content}</PsychAssessmentsText>
                      <PsychAssessmentsText>{psychAssessments[3]?.content}</PsychAssessmentsText>
                      <PsychAssessmentsText>{psychAssessments[4]?.content}</PsychAssessmentsText>
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
  parentingSkills: PropTypes.arrayOf(customObject),
  individualPsychotherapy: customObject,
  substanceAbuseDualDiagnosesCounselling: customObject,
  adjustmentIssuesLifeTransition: PropTypes.arrayOf(customObject),
  psychAssessments: PropTypes.arrayOf(customObject),
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
    groupTherapy: groupTherapySelector(state),
    parentingSkills: parentingSkillsSelector(state),
    substanceAbuseDualDiagnosesCounselling: substanceAbuseDualDiagnosesCounsellingSelector(state),
    adjustmentIssuesLifeTransition: adjustmentIssuesLifeTransitionsSelector(state),
    psychAssessments: psychAssessmentsSelector(state)
  };
};

export default connect(mapStateToProps)(Treatments);
