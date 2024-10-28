import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';

export default function RegisterCompany() {
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
                    // style={{ width: '570px', height: '48px' }}
                  ></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="회사명" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="업직종" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="브랜드" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="연 평균 매출액" style={{ width: '570px', height: '48px' }}></Input>
                </InputContainer>
              </InputWrapper>
              <ButtonWrapper>
                <Button design="default" style={{}}>
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
