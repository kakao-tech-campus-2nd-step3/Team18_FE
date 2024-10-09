import { Button, Flex, Input, Typo } from '@/components/common';
import Footer from '@/features/layout/Footer';
import Header from '@/features/layout/Header';
import styled from '@emotion/styled';

export const PostNotice = () => {
  return (
    <>
      <Header />
      <section>
        <Flex direction="column" alignItems="center">
          <LineWrapper>
            <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
              <Typo element="h1" size="20px" style={{ marginBottom: '24px' }}>
                구인 글 업로드
              </Typo>
              <InputContainer>
                <Typo element="p" size="16px" style={{ fontWeight: 'bold' }}>
                  급여
                </Typo>
                <Input style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
              </InputContainer>
              <InputContainer>
                <Typo element="p" size="16px" style={{ fontWeight: 'bold' }}>
                  근무기간
                </Typo>
                <Input style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
              </InputContainer>
              <InputContainer>
                <Typo element="p" size="16px" style={{ fontWeight: 'bold' }}>
                  근무요일
                </Typo>
                <Input style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
              </InputContainer>
              <InputContainer>
                <Typo element="p" size="16px" style={{ fontWeight: 'bold' }}>
                  근무시간
                </Typo>
                <Input style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
              </InputContainer>
              <InputContainer>
                <Typo element="p" size="16px" style={{ fontWeight: 'bold' }}>
                  고용형태
                </Typo>
                <Input style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
              </InputContainer>
              <InputContainer>
                <Typo element="p" size="16px" style={{ fontWeight: 'bold' }}>
                  비자조건
                </Typo>
                <Input style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
              </InputContainer>
              <InputContainer>
                <Typo element="p" size="16px" style={{ fontWeight: 'bold' }}>
                  우대사항
                </Typo>
                <Input style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
              </InputContainer>
              <Button theme="default" style={{ marginTop: '52px' }}>
                등록하기
              </Button>
            </Flex>
          </LineWrapper>
        </Flex>
      </section>
      <Footer />
    </>
  );
};

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
