import { Button, Flex, Input, Typo } from '@/components/common';
import Layout from '@/features/layout';
import styled from '@emotion/styled';

export const EmployeeContract = () => {
  return (
    <>
      <Layout>
        <section>
          <Flex direction="column" alignItems="center">
            <LineWrapper>
              <Flex direction="column" justifyContent="space-between" alignItems="center" style={{ width: '100%' }}>
                <Typo element="h1" size="24px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                  근로계약서 작성하기
                </Typo>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    사용자
                  </Typo>
                  <InputContainer>
                    <Input label="업체명" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="소재지" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="전화번호" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="성명" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="사업자등록번호" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    근로자
                  </Typo>
                  <InputContainer>
                    <Input label="성명" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="생년월일" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="본국 주소" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    근로계약기간
                  </Typo>
                  <InputContainer>
                    <Input label="시작일자" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="종료일자" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="수습기간" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    근로장소
                  </Typo>
                  <InputContainer>
                    <Input label="근로장소" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    업무내용
                  </Typo>
                  <InputContainer>
                    <Input label="업무내용" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    근로시간
                  </Typo>
                  <InputContainer>
                    <Input label="근로시간" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="휴게시간" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    휴일
                  </Typo>
                  <InputContainer>
                    <Input label="휴일" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    임금
                  </Typo>
                  <InputContainer>
                    <Input label="월 통상임금" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="수습기간 중 임금" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="임금 지급일" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="지급방법" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                </InputWrapper>
                <InputWrapper>
                  <Typo element="h3" size="20px" style={{ fontWeight: 'bold', marginBottom: '24px' }}>
                    숙식제공
                  </Typo>
                  <InputContainer>
                    <Input label="숙박시설 제공" style={{ width: '570px', height: '48px' }}></Input>
                  </InputContainer>
                  <InputContainer>
                    <Input label="식사 제공" style={{ width: '570px', height: '48px' }}></Input>
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
                    <Button theme="default" style={{ marginRight: '16px' }}>
                      다운로드
                    </Button>
                    <Button theme="default" style={{}}>
                      제출하기
                    </Button>
                  </div>
                </ButtonWrapper>
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
