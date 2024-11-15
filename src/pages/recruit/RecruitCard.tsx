import { Button, Flex, Icon, Modal, Typo } from '@/components/common';
import styled from '@emotion/styled';
import type { RecruitCardProps, RequiredFieldCheckProps } from './RecruitType';
import { useTranslation } from 'react-i18next';
import useToggle from '@/hooks/useToggle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { userLocalStorage } from '@/utils/storage';

export default function RecruitCard({
  koreanTitle,
  companyScale,
  area,
  requestedCareer,
  imageUrl,
  requiredFieldCheck,
  recruitmentId,
}: RecruitCardProps) {
  const { t } = useTranslation();
  const [isToggle, toggle] = useToggle();
  const [falseValues, setFalseValues] = useState<string[]>([]);
  const nav = useNavigate();
  const userType = userLocalStorage.getUser()?.type || '';
  const checkHandler = (value: RequiredFieldCheckProps | undefined) => {
    if (!value) return;
    if (userType === 'employer') {
      alert('고용주 계정으로는 지원할 수 없습니다.');
      return;
    }
    const falseValues = Object.keys(value).filter((key) => !value[key as keyof RequiredFieldCheckProps]);
    setFalseValues(falseValues);
    if (falseValues.length === 0) {
      nav(`/applyguide/${recruitmentId}`);
    } else {
      toggle();
    }
  };

  const ModalText = (text: string[]) => {
    const value = {
      resumeExistence: t('recruit.Modal.resumeExistence'),
      visaExistence: t('recruit.Modal.visaExistence'),
      signExistence: t('recruit.Modal.signExistence'),
      foreignerIdNumberExistence: t('recruit.Modal.foreignerIdNumberExistence'),
    };
    const newFalseValues = text.map((tex) => value[tex as keyof typeof value]);

    return (
      <Flex direction="column" justifyContent="center" alignItems="center" gap={{ y: '20px' }}>
        <Flex justifyContent="center" gap={{ x: '10px' }}>
          {newFalseValues.map((val) => (
            <Typo bold size="20px" key={val}>
              <p css={{ color: 'red' }}>{val}</p>
            </Typo>
          ))}
        </Flex>
        <Typo size="20px">
          <p css={{ color: 'red' }}>{t('recruit.Modal.alert')}</p>
        </Typo>
        <Typo>{t('recruit.Modal.ment')}</Typo>
      </Flex>
    );
  };

  return (
    <RecruitContainer>
      {imageUrl ? <CompanyImg alt="companyImg" src={imageUrl} /> : <SkeletonImg />}
      <Info_Div>
        <Info_p>
          <p>{koreanTitle}</p>
          <p>{`${companyScale} | ${area} | ${requestedCareer}`}</p>
        </Info_p>
        <Info_Btn>
          <CustomBtn
            background="#0a65cc"
            onClick={() => {
              checkHandler(requiredFieldCheck);
            }}
          >
            {t('recruit.recruit')}
          </CustomBtn>
          <CustomBtn color="0a65cc" width="10px">
            <div>
              <Icon.Social.Instagram />
            </div>
          </CustomBtn>
        </Info_Btn>
      </Info_Div>
      {isToggle && (
        <Modal
          textChildren={ModalText(falseValues)}
          buttonChildren={
            <Flex gap={{ x: '10px' }} justifyContent="center">
              <CustomBtn background="#0a65cc" onClick={toggle}>
                {t('recruit.Modal.close')}
              </CustomBtn>
              <CustomBtn background="#0a65cc" onClick={() => nav('/employee-my-page')}>
                {t('recruit.Modal.myPage')}
              </CustomBtn>
            </Flex>
          }
          onClose={toggle}
        />
      )}
    </RecruitContainer>
  );
}

const RecruitContainer = styled.div`
  margin: 100px 0 0;
  width: 100%;
  max-width: 680px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 380px;
  }
  @media (max-width: 480px) {
    max-width: 280px;
  }
`;

const CompanyImg = styled.img<React.ImgHTMLAttributes<HTMLImageElement>>`
  width: 100%;
  height: 380px;

  border-radius: 20px;
  object-fit: cover;
  display: ${(props) => (props.src ? 'block' : 'none')};
  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    height: 220px;
  }
`;

const Info_Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 5px;
  }
`;

const Info_p = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 18px;

  p:nth-of-type(1) {
    font-size: 24px;
  }

  p:nth-of-type(2) {
    font-size: 18px;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    p:nth-of-type(1) {
      font-size: 20px;
    }
    p:nth-of-type(2) {
      font-size: 14px;
    }
  }
`;
const Info_Btn = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  gap: 10px;
`;

const CustomBtn = styled(Button)<{ background?: string; color?: string; width?: string }>`
  background: ${(props) => props.background || ''};
  color: ${(props) => props.color || 'white'};
  width: ${(props) => props.width || '190px'};
  height: 50px;
  border-radius: 4px;
  display: flex;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: ${(props) => props.width || '160px'};
  }
`;

const SkeletonImg = styled.div`
  width: 100%;
  height: 380px;
  border-radius: 20px;
  background: linear-gradient(90deg, #e0e0e0 25%, #f5f5f5 50%, #e0e0e0 75%);
  background-size: 300% 100%;
  animation: shimmer 5s infinite linear;

  @media (max-width: 768px) {
    height: 300px;
  }
  @media (max-width: 480px) {
    height: 220px;
  }

  @keyframes shimmer {
    0% {
      background-position: -300% 0;
    }
    100% {
      background-position: 300% 0;
    }
  }
`;
