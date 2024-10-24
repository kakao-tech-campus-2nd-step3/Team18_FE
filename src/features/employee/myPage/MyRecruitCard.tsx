import { Card, Image, Typo, Button } from '@/components/common';
import styled from '@emotion/styled';
import { MyRecruitListProps, StateProps } from '@/types';

type DesignProps = {
  design: 'default' | 'outlined' | 'textbutton' | 'deactivate';
  text: string;
};

function getStateStyle(state: StateProps): DesignProps {
  switch (state) {
    case '근로계약서 서명하기':
      return { design: 'default', text: '근로계약서 서명하기' };
    case '채용 마감':
      return { design: 'deactivate', text: '채용 마감' };
    case '지원서 검토중':
      return { design: 'outlined', text: '지원서 검토중' };
    case '채용 완료':
      return { design: 'deactivate', text: '채용 완료' };
    default:
      return { design: 'deactivate', text: '알 수 없음' }; // 상태가 정의되지 않은 경우
  }
}

type Props = {
  myRecruit: MyRecruitListProps;
};

export default function MyRecruitCard({ myRecruit }: Props) {
  const { image, title, area, state } = myRecruit;
  const buttonStyle = getStateStyle(state);

  return (
    <Card
      borderColor="blue"
      borderRadius="4px"
      css={{
        width: '100%',
        height: '100px',
        marginBottom: '16px',
        padding: '10px 30px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
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
      <Button design={buttonStyle.design} style={{ width: '200px', padding: '10px 20px' }}>
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
