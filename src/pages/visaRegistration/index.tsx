import { Button, Flex, InnerContainer, Input, Typo } from '@/components/common';
import Footer from '@/features/layout/footer';
import Header from '@/features/layout/Header';
import styled from '@emotion/styled';
import { ChangeEvent, useState } from 'react';

export default function VisaRegistration() {
  const [foreignerNumber, setForeignerNumber] = useState('');
  const [visaGenerateDate, setVisaGenerateDate] = useState('');
  const [error, setError] = useState('');

  const validateForeignerNumber = (number: string) => {
    const regex = /^\d{6}-\d{7}$/;
    return regex.test(number);
  };

  const handleForeignerNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!validateForeignerNumber(value) && value !== '') {
      setError('올바른 형식으로 입력해주세요. 형식: 000000-0000000');
    } else {
      setError('');
    }
    setForeignerNumber(value);
  };

  const handleSubmit = async () => {
    if (!validateForeignerNumber(foreignerNumber)) {
      alert('외국인 번호를 올바른 형식으로 입력해주세요.');
      return;
    }
    alert('외국인 번호 및 비자 발급 일자 등록이 완료되었습니다.');
  };

  return (
    <>
      <Header />
      <MainContainer>
        <InnerContainer
          maxWidth="1300px"
          style={{ height: '520px', padding: '50px 0', border: '1px solid #E9E9E9', borderRadius: '12px' }}
        >
          <Flex justifyContent="center" alignItems="center" direction="column" style={{ height: '100%' }}>
            <Typo element="h2" size="24px" style={{ marginBottom: '60px' }}>
              외국인 번호 및 발급 일자 등록
            </Typo>
            <Form onSubmit={handleSubmit}>
              <InputWrapper>
                <Input
                  label="외국인 번호"
                  type="text"
                  value={foreignerNumber}
                  onChange={handleForeignerNumberChange}
                  style={{ padding: '15px 20px' }}
                  required
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
              </InputWrapper>
              <InputWrapper>
                <Input
                  label="비자 발급 일자"
                  type="date"
                  value={visaGenerateDate}
                  onChange={(e) => setVisaGenerateDate(e.target.value)}
                  style={{ padding: '15px 20px' }}
                  required
                />
              </InputWrapper>
              <ButtonContainer>
                <Button type="submit" style={{ backgroundColor: '#0A65CC', color: '#fff', borderRadius: '4px' }}>
                  등록하기
                </Button>
              </ButtonContainer>
            </Form>
          </Flex>
        </InnerContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

const MainContainer = styled.div`
  padding: 40px 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  font-size: 16px;
  font-weight: bold;
  width: 700px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonContainer = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 13px;
`;
