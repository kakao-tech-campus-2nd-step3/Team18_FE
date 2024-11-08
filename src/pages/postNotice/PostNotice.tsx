import { usePostNotice } from '@/apis/postNotice/hooks/usePostNotice';
import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import ROUTE_PATH from '@/routes/path';
import { NoticeRequestData } from '@/types';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const default_inputs: NoticeRequestData = {
  title: '',
  companyScale: '',
  area: '',
  salary: '',
  workDuration: '',
  workDays: '',
  workType: '',
  workHours: '',
  requestedCareer: '',
  majorBusiness: '',
  eligibilityCriteria: '',
  preferredConditions: '',
  employerName: '',
  companyName: '',
};

export default function PostNotice() {
  const { t } = useTranslation();
  const mutation = usePostNotice();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({ ...default_inputs });

  const {
    title,
    companyScale,
    area,
    salary,
    workDuration,
    workDays,
    workType,
    workHours,
    requestedCareer,
    majorBusiness,
    eligibilityCriteria,
    preferredConditions,
    employerName,
    companyName,
  } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostNotice = () => {
    mutation.mutate(inputs, {
      onSuccess: () => {
        navigate(ROUTE_PATH.HOME);
      },
      onError: () => {
        // 이부분 에러처리 결정해야함.
        alert('값이 정상적으로 저장되지 않았습니다.');
      },
    });
  };

  return (
    <Layout>
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                {t('postNotice.TITLE')}
              </Typo>
              <InputContainer>
                <Input
                  label={t('postNotice.TITLE')}
                  name="title"
                  style={InputStyle}
                  value={title}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.COMPANY_NAME')}
                  name="companyName"
                  style={InputStyle}
                  value={companyName}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.EMPLOYER_NAME')}
                  name="employerName"
                  style={InputStyle}
                  value={employerName}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.COMPANY_SCALE')}
                  name="companyScale"
                  style={InputStyle}
                  value={companyScale}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.AREA')}
                  name="area"
                  style={InputStyle}
                  value={area}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.SALARY')}
                  name="salary"
                  style={InputStyle}
                  value={salary}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.MAJOR_BUSINESS')}
                  name="majorBusiness"
                  style={InputStyle}
                  value={majorBusiness}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKDURATION')}
                  labelStyle={{ width: '100px', textAlign: 'left' }}
                  name="workDuration"
                  style={InputStyle}
                  value={workDuration}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKDAYS')}
                  name="workDays"
                  style={InputStyle}
                  value={workDays}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKHOURS')}
                  name="workHours"
                  style={InputStyle}
                  value={workHours}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.WORKTYPE')}
                  name="workType"
                  style={InputStyle}
                  value={workType}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.REQUESTED_CAREER')}
                  name="requestedCareer"
                  style={InputStyle}
                  value={requestedCareer}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.ELIGIBILITY_CRITERIA')}
                  name="eligibilityCriteria"
                  style={InputStyle}
                  value={eligibilityCriteria}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <InputContainer>
                <Input
                  label={t('postNotice.PREFERRED_CONDITIONS')}
                  name="preferredConditions"
                  style={InputStyle}
                  value={preferredConditions}
                  onChange={onChange}
                ></Input>
              </InputContainer>
              <Button onClick={handlePostNotice} design="default" style={{ marginTop: '52px' }}>
                {t('postNotice.SUBMIT')}
              </Button>
            </Flex>
          </LineWrapper>
        </Flex>
      </section>
    </Layout>
  );
}

const LineWrapper = styled.div`
  border: 1px solid #e9e9e9;
  border-radius: 3px;
  padding: 100px 200px;
  margin: 52px 0;
`;

const InputContainer = styled.div`
  width: 700px;
  align-items: start;
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between; // 요소들을 양쪽 끝으로 정렬
`;

const InputStyle = { width: '600px', height: '48px', marginTop: '12px' };
