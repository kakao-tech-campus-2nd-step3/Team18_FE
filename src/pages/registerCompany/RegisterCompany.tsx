import { useFetchPostCompany } from '@/apis/registerCompany/useRegisterCompany';
import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import ROUTE_PATH from '@/routes/path';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterCompany() {
  const mutation = useFetchPostCompany();
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({
    name: '',
    industryOccupation: '',
    brand: '',
    revenuePerYear: 0,
    logoImage: '',
  });

  const { name, industryOccupation, brand, revenuePerYear, logoImage } = inputs;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handlePostCompany = () => {
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
                회사 등록
              </Typo>
              <InputWrapper>
                <InputContainer>
                  <Input
                    label="회사 이미지 업로드(선택)"
                    type="file"
                    value={logoImage}
                    onChange={onChange}
                    // style={{ width: '570px', height: '48px' }}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="회사명" value={name} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="업직종" value={industryOccupation} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="브랜드" value={brand} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="연 평균 매출액" value={revenuePerYear} onChange={onChange} style={InputStyle}></Input>
                </InputContainer>
              </InputWrapper>
              <ButtonWrapper>
                <Button design="default" onClick={handlePostCompany} style={{}}>
                  등록하기
                </Button>
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
  justify-content: center;
  margin-top: 52px;
`;

const InputStyle = { width: '570px', height: '48px' };
