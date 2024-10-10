import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';

export const PostNotice = () => {
  return (
    <>
      <Layout>
        <section>
          <Flex direction="column" alignItems="center">
            <LineWrapper>
              <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
                <Typo element="h1" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                  구인 글 업로드
                </Typo>
                <InputContainer>
                  <Input label="급여" style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="근무기간" style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="근무요일" style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="근무시간" style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="고용형태" style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="비자조건" style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
                </InputContainer>
                <InputContainer>
                  <Input label="우대사항" style={{ width: '700px', height: '48px', marginTop: '12px' }}></Input>
                </InputContainer>
                <Button theme="default" style={{ marginTop: '52px' }}>
                  등록하기
                </Button>
              </Flex>
            </LineWrapper>
          </Flex>
        </section>
      </Layout>
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
