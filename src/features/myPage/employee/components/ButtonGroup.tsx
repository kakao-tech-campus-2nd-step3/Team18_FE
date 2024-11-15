import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { Button, Icon, Typo } from '@/components/common';
import { useTranslation } from 'react-i18next';
import { useGetRequiredFieldCheck } from '@/apis/recruitmentsDetail/useRequiredFieldCheck';
import { type RequiredFieldCheckProps } from '@/pages/recruit/RecruitType';
import { css } from '@emotion/react';

export default function ButtonGroup() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { data: requiredFieldCheck } = useGetRequiredFieldCheck();
  const { resumeExistence, visaExistence, foreignerIdNumberExistence, signExistence }: RequiredFieldCheckProps =
    requiredFieldCheck || {
      resumeExistence: false,
      visaExistence: false,
      foreignerIdNumberExistence: false,
      signExistence: false,
    };

  return (
    <ColumnSection>
      <ActiveButton
        design={resumeExistence ? 'deactivate' : 'outlined'}
        css={resumeExistence ? deactiveButtonStyle : activateButtonStyle}
        style={{ borderRight: '3px solid #0a65cc' }}
        onClick={() => {
          navigate(ROUTE_PATH.RESUME);
        }}
        disabled={resumeExistence}
      >
        <Typo bold>{resumeExistence ? t('employeeMyPage.COMPLETE_RESUME') : t('employeeMyPage.REGISTER_RESUME')}</Typo>
        {resumeExistence ? <Icon.EmployeePage.Check /> : <Icon.EmployeePage.Bag />}
      </ActiveButton>
      <ActiveButton
        design={signExistence ? 'deactivate' : 'outlined'}
        css={signExistence ? deactiveButtonStyle : activateButtonStyle}
        style={{ borderRight: '3px solid #0a65cc' }}
        onClick={() => {
          navigate(ROUTE_PATH.REGISTERSIGN);
        }}
        disabled={signExistence}
      >
        <Typo bold>{signExistence ? t('employeeMyPage.COMPLETE_SIGN') : t('employeeMyPage.REGISTER_SIGN')}</Typo>
        {signExistence ? <Icon.EmployeePage.Check /> : <Icon.EmployeePage.Pen />}
      </ActiveButton>
      <ActiveButton
        design={visaExistence ? 'deactivate' : 'outlined'}
        css={visaExistence ? deactiveButtonStyle : activateButtonStyle}
        onClick={() => {
          navigate(ROUTE_PATH.REGISTER_VISA);
        }}
        disabled={visaExistence}
      >
        <Typo bold>
          {visaExistence && foreignerIdNumberExistence
            ? t('employeeMyPage.COMPLETE_VISA')
            : t('employeeMyPage.REGISTER_VISA')}
        </Typo>
        {visaExistence && foreignerIdNumberExistence ? <Icon.EmployeePage.Check /> : <Icon.EmployeePage.Card />}
      </ActiveButton>
    </ColumnSection>
  );
}

const ColumnSection = styled.div`
  width: 100%;
  display: flex;
`;

const ActiveButton = styled(Button)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  border-radius: 0;
  border: 0;
  color: #000;
`;

export const deactiveButtonStyle = css``;

export const activateButtonStyle = css`
  ${deactiveButtonStyle};
  transition:
    background-color 0.3s,
    background-image 0.3s;
  &:hover {
    * {
      color: #fff;
    }
  }
`;
