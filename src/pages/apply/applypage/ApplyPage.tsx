import Layout from '@/features/layout';
import styled from '@emotion/styled';
import { Flex, Typo, Button, Modal } from '@/components/common';
import { useApplyHook } from './useApplyHook';
import ApplyInput from './ApplyInput';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export default function ApplyPage() {
  const { toggle, isToggle, register, handleSubmit, onSubmit, handleApplySubmit, errors } = useApplyHook();
  const { t } = useTranslation();
  const { recruitmentId } = useParams();
  return (
    <Layout>
      <Flex justifyContent="center" alignItems="center">
        <ApplyCard>
          <Typo size="24px" bold={true}>
            {t('apply.title')}
          </Typo>
          <StyledForm onSubmit={handleSubmit(onSubmit)}>
            <ApplyInput
              errors={errors}
              title={t('apply.name')}
              label="name"
              register={register}
              placeholder={t('apply.description.name')}
              required
            />
            <ApplyInput
              errors={errors}
              title={t('apply.address')}
              label="address"
              register={register}
              placeholder={t('apply.description.address')}
              required
            />
            <ApplyInput
              errors={errors}
              title={t('apply.phoneNumber')}
              label="phoneNumber"
              register={register}
              pattern={/^010-\d{4}-\d{4}$/}
              patternMessage={t('apply.numberError')}
              placeholder={t('apply.description.phoneNumber')}
              required
            />
            <ApplyInput
              errors={errors}
              title={t('apply.applyMotivation')}
              label="applyMotivation"
              register={register}
              placeholder={t('apply.description.applyMotivation')}
              required
            />
            <CustomBtn type="submit">{t('apply.submit')}</CustomBtn>
          </StyledForm>
        </ApplyCard>
        {isToggle && recruitmentId && (
          <Modal
            textChildren={<ModalContainer>{t('apply.submitMent')}</ModalContainer>}
            buttonChildren={
              <CustomBtn onClick={() => handleApplySubmit(Number(recruitmentId))}>{t('apply.submit')}</CustomBtn>
            }
            onClose={toggle}
          />
        )}
      </Flex>
    </Layout>
  );
}

const ApplyCard = styled.div`
  width: 70%;
  box-shadow: 0px 12px 32px 0px rgba(24, 25, 28, 0.08);
  border-radius: 12px;
  border: 1px solid #e9e9e9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px 0;
  margin: 40px 0;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
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
  align-self: center;
`;

const ModalContainer = styled.div`
  font-size: 24px;
  margin: 30px 0;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  align-items: start;
  gap: 50px;
`;
