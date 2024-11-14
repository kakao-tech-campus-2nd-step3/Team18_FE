import { Card, Image, Typo } from '@/components/common';
import { userLocalStorage } from '@/utils/storage';
import styled from '@emotion/styled';

export default function EmployeeProfile() {
  const name = userLocalStorage.getUser()?.name || '';
  const profileImage = userLocalStorage.getUser()?.profileImage || '';

  return (
    <Card
      style={{
        width: '100%',
        height: '100px',
        border: 0,
        borderRadius: 0,
        padding: '0 30px',
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
        </TextSection>
      </ProfileSection>
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
