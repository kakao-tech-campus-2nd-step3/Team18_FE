import { Button, Flex, List, Table, Td, Th, Typo } from '@/components/common';
import { RecruitmentItem } from '@/types';
import { buttonGroupStyle, buttonStyle, recruitmentStyle, recruitmentTitleStyle } from './RecruitmentsTable.styles';
import { useNavigate, useParams } from 'react-router-dom';
import ROUTE_PATH from '@/routes/path';
import { useCloseRecruitment } from '@/apis/recruitments/hooks/useCloseRecruitment';
import { useLanguage } from '@/components/providers/Language.provider';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

type Props = {
  recruitmentList: RecruitmentItem[];
};

export default function RecruitmentsTable({ recruitmentList }: Props) {
  const navigate = useNavigate();
  const { companyId } = useParams();
  const mutation = useCloseRecruitment();
  const { language } = useLanguage();
  const { t } = useTranslation();
  const [closedRecruitment, setClosedRecruitment] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    const initialStatus = recruitmentList.reduce(
      (acc, recruitment) => ({
        ...acc,
        [recruitment.recruitmentId]: !recruitment.hiring,
      }),
      {},
    );
    setClosedRecruitment(initialStatus);
  }, [recruitmentList]);

  const goToApplicantsPage = (companyId: string, recruitmentId: number) => {
    navigate(
      ROUTE_PATH.APPLICANTS.replace(':companyId', companyId).replace(':recruitmentId', recruitmentId.toString()),
    );
  };

  const closeRecruitmentClick = (recruitmentId: number) => {
    mutation.mutate(recruitmentId, {
      onSuccess: () => {
        setClosedRecruitment((prev) => ({
          ...prev,
          [recruitmentId]: true,
        }));
      },
    });
  };

  return (
    <Table>
      <thead>
        <tr>
          <Th>{t('myCompany.table_headers.location')}</Th>
          <Th>{t('myCompany.table_headers.title')}</Th>
        </tr>
      </thead>
      <tbody>
        <List
          items={recruitmentList}
          renderItem={(recruitment) => (
            <tr key={recruitment.recruitmentId}>
              <Td>{recruitment.area}</Td>
              <Td>
                <Flex css={recruitmentStyle}>
                  <Flex direction="column" justifyContent="center" gap={{ y: '5px' }}>
                    <Typo size="16px" style={recruitmentTitleStyle}>
                      {recruitment.companyName}
                    </Typo>
                    <Typo element="p" size="16px">
                      {language === 've' ? recruitment.vietnameseTitle : recruitment.koreanTitle}
                    </Typo>
                  </Flex>
                  <Flex css={buttonGroupStyle}>
                    <Button css={buttonStyle} onClick={() => goToApplicantsPage(companyId!, recruitment.recruitmentId)}>
                      {t('myCompany.buttons.view_applicants')}
                    </Button>
                    <Button
                      css={buttonStyle}
                      onClick={() => closeRecruitmentClick(recruitment.recruitmentId)}
                      design={!closedRecruitment[recruitment.recruitmentId] ? 'default' : 'deactivate'}
                      disabled={closedRecruitment[recruitment.recruitmentId]}
                    >
                      {!closedRecruitment[recruitment.recruitmentId]
                        ? t('myCompany.buttons.close_recruitment')
                        : t('myCompany.buttons.closed_recruitment')}
                    </Button>
                  </Flex>
                </Flex>
              </Td>
            </tr>
          )}
        />
      </tbody>
    </Table>
  );
}
