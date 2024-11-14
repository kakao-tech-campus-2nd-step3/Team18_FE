import { Card, Image, Typo, Button } from '@/components/common';
import styled from '@emotion/styled';
import { MyRecruitListProps, StateProps } from '@/types';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useGetContractImg } from '@/apis/contract/hooks/useGetContractImg';
import React from 'react';

type DesignProps = {
  design: 'default' | 'outlined' | 'textbutton' | 'deactivate';
  text?: string;
  style?: React.CSSProperties;
};

function getStateStyle(status: StateProps): DesignProps {
  switch (status) {
    case '근로계약서 서명하기':
      return { design: 'default', text: '근로계약서 서명하기' };
    case '채용마감':
      return { design: 'deactivate', text: '채용 마감' };
    case '지원서 검토중':
      return {
        design: 'deactivate',
        text: '지원서 검토중',
        style: { backgroundColor: '#fff', border: '3px solid #9A9A9A' },
      };
    case '채용완료':
      return { design: 'outlined', text: '근로계약서 다운로드' };
    default:
      return { design: 'deactivate' }; // 상태가 정의되지 않은 경우
  }
}

type Props = {
  myRecruit: MyRecruitListProps;
};

type DownloadContractProps = {
  url: string;
  urlV: string;
};

export default function MyRecruitCard({ myRecruit }: Props) {
  const { image, title, area, status, applyId } = myRecruit;
  const buttonStyle = getStateStyle(status);
  const navigate = useNavigate();
  const { data: imgURLs } = useGetContractImg(applyId);

  // 근로계약서 이미지 다운로드
  const downloadContract = () => {
    const imgData: DownloadContractProps = imgURLs;
    const link = document.createElement('a');
    link.href = imgData.urlV;
    link.download = 'downloaded_image';
    console.log(imgData);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card
      borderRadius="4px"
      css={{
        width: '100%',
        height: '100px',
        marginBottom: '16px',
        padding: '10px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid #0A65CC',
      }}
    >
      <Image
        url={image}
        size={{
          width: '50px',
          height: '50px',
        }}
      />
      <TextSection>
        <Typo bold size="18px">
          {title}
        </Typo>
        <Typo size="14px">{area}</Typo>
      </TextSection>
      <Button
        design={buttonStyle.design}
        style={{ width: '200px', padding: '10px 20px', ...buttonStyle.style }}
        onClick={() => {
          if (status == '근로계약서 서명하기') {
            navigate(ROUTE_PATH.CONTRACT.EMPLOYEE.replace(':applyId', applyId.toString()));
          } else if (status == '채용완료') {
            downloadContract();
          }
        }}
      >
        {buttonStyle.text}
      </Button>
    </Card>
  );
}

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  flex: 1;
  padding: 0 10px;
`;
