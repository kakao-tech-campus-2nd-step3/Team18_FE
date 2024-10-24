import Layout from '@/features/layout';
import { Flex, Typo, Modal, Button } from '@/components/common';
import styled from '@emotion/styled';
import { SelectKoreanLevel, InputResumeInfo, TextareaResumeInfo } from './ResumeInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { type ResumeInfo } from './ResumeType';
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';

export default function Resume() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeInfo>();
  const [isToggle, toggle] = useToggle();
  const [formData, setFormData] = useState<ResumeInfo | null>(null);

  const onSubmit: SubmitHandler<ResumeInfo> = (data) => {
    setFormData(data);
    toggle();
  };

  const handleResumeSubmit = () => {
    if (formData) {
      console.log(formData);
      alert('제출 완료!');
      toggle();
    }
  };
  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center">
        <ResumeCard>
          <Typo size="24px" bold={true}>
            이력서 작성
          </Typo>
          <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <Flex
              gap={{ x: '30px' }}
              css={{
                width: '100%',
                '@media (max-width: 1024px)': {
                  flexDirection: 'column',
                },
              }}
            >
              {/* 인풋 */}
              <Flex direction="column" css={{ flex: 7, width: '100%' }} gap={{ y: '45px' }}>
                <InputResumeInfo
                  id="applicantName"
                  label="이름"
                  register={register}
                  errors={errors}
                  placeholder="이름을 입력하세요."
                />

                <InputResumeInfo
                  id="address"
                  label="주소"
                  register={register}
                  errors={errors}
                  placeholder="주소를 입력하세요."
                />
                <InputResumeInfo
                  id="phoneNumber"
                  label="번호"
                  register={register}
                  errors={errors}
                  pattern={/^010-\d{4}-\d{4}$/}
                  patternMessage="올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)"
                  placeholder="010-0000-0000 형식의 번호를 입력하세요. "
                />
                <InputResumeInfo
                  id="career"
                  label="경력"
                  register={register}
                  errors={errors}
                  placeholder="경력을 입력하세요."
                />
                <TextareaResumeInfo
                  id="introduction"
                  register={register}
                  errors={errors}
                  placeholder="자기소개를 입력하세요."
                />
              </Flex>
              {/* 라디오 */}
              <div css={{ flex: 3, width: '100%' }}>
                <Flex
                  css={{
                    paddingLeft: '30px',
                    '@media (max-width: 1024px)': {
                      paddingLeft: '0px',
                      width: '100%',
                      marginTop: '30px',
                    },
                  }}
                  direction="column"
                  gap={{ y: '10px' }}
                >
                  <Typo size="18px" bold={true}>
                    한국어 실력
                  </Typo>
                  <SelectKoreanLevel level="초급" register={register} />
                  <SelectKoreanLevel level="중급" register={register} />
                  <SelectKoreanLevel level="고급" register={register} />
                  {errors.koreanLanguageLevel && (
                    <p css={{ color: 'red', marginTop: '10px' }}>한국어 실력을 선택해주세요!</p>
                  )}
                </Flex>
              </div>
            </Flex>
            <CustomBtn type="submit">제출하기</CustomBtn>
          </CustomForm>
        </ResumeCard>
        {isToggle && (
          <Modal
            textChildren={<p css={{ fontSize: '24px', margin: '30px 0' }}>정말 제출하시겠습니까?</p>}
            buttonChildren={<CustomBtn onClick={handleResumeSubmit}>제출하기</CustomBtn>}
            onClose={toggle}
          />
        )}
      </Flex>
    </Layout>
  );
}

const ResumeCard = styled.div`
  width: 60%;
  box-shadow: 0px 12px 32px 0px rgba(24, 25, 28, 0.08);
  border-radius: 12px;
  border: 1px solid #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 60px;
  padding: 40px 0;
  margin: 40px 0;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 95%;
  }
`;
const CustomForm = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const CustomBtn = styled(Button)`
  background: #0a65cc;
  color: white;
  border: 1px solid #e4e5e8;
  &:hover {
    border: '2px solid #0A65CC';
    background: white;
    color: #0a65cc;
  }
`;
