import { useFetchPostContract } from '@/apis/contract/hooks/usePostContract';
import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import ROUTE_PATH from '@/routes/path';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function EmployerContract() {
  const { applyId: applicationId } = useParams();
  const mutation = useFetchPostContract();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    salary: '',
    workingHours: '',
    dayOff: '',
    annualPaidLeave: '',
    workingPlace: '',
    responsibilities: '',
    rule: '',
    applyId: Number(`${applicationId}`),
  });

  const { salary, workingHours, dayOff, annualPaidLeave, workingPlace, responsibilities, rule } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostContract = () => {
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
              <Typo element="h1" size="24px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                근 로 계 약 서
              </Typo>
              <InputWrapper>
                <InputContainer>
                  <Input label="1. 근무장소" value={workingPlace} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="2. 업무내용" value={responsibilities} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input
                    label="3. 근로일 및 근로일별 근로시간"
                    value={workingHours}
                    onChange={onChange}
                    style={InputStyle}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="4. 주휴일" value={dayOff} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="5. 임금" value={salary} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="6. 연차유급휴가" value={annualPaidLeave} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="7. 취업규칙" value={rule} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
              </InputWrapper>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                사용자와 근로자는 각자가 근로계약, 취업규칙, 단체협약을 지키고 성실하게 이행하여야 한다.
              </Typo>
              <Typo element="p" size="16px" style={{ fontWeight: 'bold', marginTop: '24px' }}>
                이 계약에서 정하지 않은 사항은 '근로기준법'에서 정하는 바에 따른다.
              </Typo>
              <ButtonWrapper>
                <div>
                  <>
                    <input type="checkbox" />
                    <label>서명하기</label>
                  </>
                </div>
                <div>
                  <Button design="default" onClick={handlePostContract}>
                    제출하기
                  </Button>
                </div>
              </ButtonWrapper>
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

const InputWrapper = styled.div`
  margin-top: 28px;
`;

const InputContainer = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px 0;
`;

const ButtonWrapper = styled.div`
  width: 700px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 52px;
`;

const InputStyle = { width: '570px', height: '48px' };
