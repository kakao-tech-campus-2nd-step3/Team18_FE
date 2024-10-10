import { Button } from '@/components/common';
import { Icon } from '@components/common';
import styled from '@emotion/styled';

export interface RecruitCardProps {
  title: string;
  companySize: string;
  area: string;
  requestedCareer: string;
  companyImage?: string;
}
export default function RecruitCard({ title, companySize, area, requestedCareer, companyImage }: RecruitCardProps) {
  return (
    <RecruitContainer>
      <CompanyImg alt="a" src={companyImage} />
      <Info_Div>
        <Info_p>
          <p>{title}</p>
          <p>{`${companySize} | ${area} | ${requestedCareer}`}</p>
        </Info_p>
        <Info_Btn>
          <CustomBtn background="#0a65cc">지원하기</CustomBtn>
          <CustomBtn color="0a65cc" width="10px">
            <Icon.Social.Instagram />
          </CustomBtn>
        </Info_Btn>
      </Info_Div>
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
  height: 56px;
  border-radius: 4px;
  display: flex;
  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: ${(props) => props.width || '160px'};
  }
`;
