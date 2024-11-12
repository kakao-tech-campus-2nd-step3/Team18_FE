import Layout from '@/features/layout';
import { Flex, Typo, Modal, Button } from '@/components/common';
import styled from '@emotion/styled';
import { SelectKoreanLevel, InputResumeInfo, TextareaResumeInfo } from './ResumeInput';
import { useForm, SubmitHandler } from 'react-hook-form';
import { type ResumeInfo } from './ResumeType';
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import { FetchResume } from '@/apis/resume/useResumeHook';
import { useTranslation } from 'react-i18next';

export default function Resume() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResumeInfo>();
  const [isToggle, toggle] = useToggle();
  const [formData, setFormData] = useState<ResumeInfo | null>(null);
  const mutation = FetchResume();
  const onSubmit: SubmitHandler<ResumeInfo> = (data) => {
    setFormData(data);
    toggle();
  };

  const handleResumeSubmit = () => {
    if (formData) {
      const data = JSON.stringify(formData);
      mutation.mutate({ data });

      toggle();
    }
  };

  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center">
        <ResumeCard>
          <Typo size="24px" bold={true}>
            {t('resume.title')}
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
                  label={t('resume.name')}
                  register={register}
                  errors={errors}
                  placeholder={t('resume.ResumeDescription.name')}
                />

                <InputResumeInfo
                  id="address"
                  label={t('resume.address')}
                  register={register}
                  errors={errors}
                  placeholder={t('resume.ResumeDescription.address')}
                />
                <InputResumeInfo
                  id="phoneNumber"
                  label={t('resume.phoneNumber')}
                  register={register}
                  errors={errors}
                  pattern={/^010-\d{4}-\d{4}$/}
                  patternMessage={t('resume.ResumeDescription.phoneNumberError')}
                  placeholder={t('resume.ResumeDescription.phoneNumber')}
                />
                <InputResumeInfo
                  id="career"
                  label={t('resume.career')}
                  register={register}
                  errors={errors}
                  placeholder={t('resume.ResumeDescription.career')}
                />
                <TextareaResumeInfo
                  id="introduction"
                  register={register}
                  errors={errors}
                  placeholder={t('resume.ResumeDescription.introduction')}
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
                    {t('resume.koreanLevel')}
                  </Typo>
                  <SelectKoreanLevel level={t('resume.koreanLevel_1')} register={register} />
                  <SelectKoreanLevel level={t('resume.koreanLevel_2')} register={register} />
                  <SelectKoreanLevel level={t('resume.koreanLevel_3')} register={register} />
                  {errors.koreanLanguageLevel && (
                    <p css={{ color: 'red', marginTop: '10px' }}>{t('resume.ResumeDescription.koreanLevel')}</p>
                  )}
                </Flex>
              </div>
            </Flex>
            <CustomBtn type="submit">{t('resume.submit')}</CustomBtn>
          </CustomForm>
        </ResumeCard>
        {isToggle && (
          <Modal
            textChildren={<p css={{ fontSize: '24px', margin: '30px 0' }}>{t('resume.btnSubmit')}</p>}
            buttonChildren={<CustomBtn onClick={handleResumeSubmit}>{t('resume.submit')}</CustomBtn>}
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
