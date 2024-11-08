import { useGetProfileInfo } from '@/apis/applicants/hooks/useGetProfileInfo';
import { Flex, Typo } from '@/components/common';
import styled from '@emotion/styled';
import { Spinner } from '@/components/common';

type ProfileInfoProps = {
  title: string;
  content: string;
};
function ProfileInfo({ title, content }: ProfileInfoProps) {
  return (
    <>
      <Flex>
        <Flex direction="column" gap={{ y: '20px' }}>
          <Typo bold={true}>{title}</Typo>
          <Typo>{content}</Typo>
        </Flex>
      </Flex>
      <Divider />
    </>
  );
}

export default function ApplicantProfile({ resumeId, applyId }: { resumeId: number; applyId: number }) {
  const { data, isLoading } = useGetProfileInfo({ resumeId, applyId });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Flex css={{ padding: '10px', width: '100%' }} direction="column">
      <Typo bold={true} size="18px">
        {data.applicantName}님의 지원서입니다.
      </Typo>
      <Flex gap={{ x: '10px' }} css={{ marginTop: '20px' }}>
        <Flex direction="column" gap={{ y: '5px' }} css={{ flex: 2 }}>
          <Typo>연락처</Typo>
          <Typo>주소</Typo>
        </Flex>
        <Flex direction="column" gap={{ y: '5px' }} css={{ flex: 8 }}>
          <Typo>{data.phoneNumber}</Typo>
          <Typo>{data.address}</Typo>
        </Flex>
      </Flex>
      <Divider />
      <ProfileInfo title="한국어 실력" content={data.koreanLanguageLevel} />
      <ProfileInfo title="경력" content={data.career} />
      <ProfileInfo title="자기소개서" content={data.introduction} />
      <ProfileInfo title="지원동기" content={data.motivation} />
    </Flex>
  );
}

const Divider = styled.div`
  width: 100%;
  height: 1px;
  opacity: 0.7;
  margin: 20px 0;
  background-color: #e9e9e9;
`;
