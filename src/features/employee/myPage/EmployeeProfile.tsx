import { Card, Image, Typo, Button } from '@/components/common';
import styled from '@emotion/styled';

export default function EmployeeProfile({
  profileImage = 'https://img.freepik.com/free-photo/user-profile-icon-front-side-with-white-background_187299-40010.jpg?t=st=1729752570~exp=1729756170~hmac=4313719023c412dd92883d97ce79956fadf541e11d8cc3a4ef05150f301f5e7f&w=740',
  name = '홍길동',
  description = '소개합니당',
}) {
  return (
    <Card
      style={{
        width: '100%',
        height: '100px',
        border: 0,
        borderRadius: '4px',
        marginBottom: '24px',
        padding: '10px 30px',
        backgroundColor: '#0A65CC',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ProfileSection>
        <Image
          url={profileImage}
          size={{
            width: '50px',
            height: '50px',
          }}
          borderRadius="50%"
        />
        <TextSection>
          <Typo bold color="white" size="20px">
            {name}
          </Typo>
          <Typo color="white" size="16px">
            {description}
          </Typo>
        </TextSection>
      </ProfileSection>
      <Button
        style={{ width: '150px', height: '40px', backgroundColor: 'white', fontSize: '12px', padding: '10px 30px' }}
      >
        프로필 수정하기
      </Button>
    </Card>
  );
}

const ProfileSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-left: 20px;
`;
