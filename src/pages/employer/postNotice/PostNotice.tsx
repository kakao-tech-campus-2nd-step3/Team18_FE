import { FetchPostNotice } from '@/apis/employer/hooks/usePostNotice';
import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { useState } from 'react';

export default function PostNotice() {
  const mutation = FetchPostNotice();
  const [inputs, setInputs] = useState({
    salary: '',
    workingDuration: '',
    workDays: '',
    workHours: '',
    workType: '',
    eligibilityCriteria: '',
    preferredConditions: '',
  });

  const { salary, workingDuration, workDays, workHours, workType, eligibilityCriteria, preferredConditions } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostNotice = () => {
    mutation.mutate(inputs);
  };

  return (
    <Layout>
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                구인 글 업로드
              </Typo>
              <InputContainer>
                <Input label="급여" style={InputStyle} value={salary} onChange={onChange}></Input>
              </InputContainer>
              <InputContainer>
                <Input label="근무기간" style={InputStyle} value={workingDuration} onChange={onChange}></Input>
              </InputContainer>
              <InputContainer>
                <Input label="근무요일" style={InputStyle} value={workDays} onChange={onChange}></Input>
              </InputContainer>
              <InputContainer>
                <Input label="근무시간" style={InputStyle} value={workHours} onChange={onChange}></Input>
              </InputContainer>
              <InputContainer>
                <Input label="고용형태" style={InputStyle} value={workType} onChange={onChange}></Input>
              </InputContainer>
              <InputContainer>
                <Input label="비자조건" style={InputStyle} value={eligibilityCriteria} onChange={onChange}></Input>
              </InputContainer>
              <InputContainer>
                <Input label="우대사항" style={InputStyle} value={preferredConditions} onChange={onChange}></Input>
              </InputContainer>
              <Button onClick={handlePostNotice} design="default" style={{ marginTop: '52px' }}>
                등록하기
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
`;

const InputStyle = { width: '700px', height: '48px', marginTop: '12px' };
