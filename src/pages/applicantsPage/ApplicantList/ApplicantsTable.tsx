import { Button, Flex, List, Table, Td, Th, Modal } from '@/components/common';
import { useState } from 'react';
import ContractModal from './Contract/ContractModal';
import { ApplicantData } from '@/types';
import { buttonGroupStyle, buttonsCellStyle, buttonStyle } from './ApplicantsTable.styles';
import ApplicantProfile from '../ApplicantList/ApplicantProfile';
import useToggle from '@/hooks/useToggle';
import { useTranslation } from 'react-i18next';

type IdProps = {
  resumeId: number;
  applyId: number;
};
type Props = {
  applicantList: ApplicantData[];
};

export default function ApplicantsTable({ applicantList }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [IdInfo, setIdInfo] = useState<IdProps | null>(null);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isToggle, toggle] = useToggle();
  const [selectedApplyId, setSelectedApplyId] = useState<number | null>(null);
  const { t } = useTranslation();

  const openModal = (userId: number, applyId: number) => {
    setSelectedUserId(userId);
    setSelectedApplyId(applyId);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUserId(null);
    setSelectedApplyId(null);
  };

  const profileOpenModal = ({ resumeId, applyId }: IdProps) => {
    setIdInfo((prev) => ({ ...prev, resumeId, applyId }));
    toggle();
  };
  return (
    <>
      <Table>
        <thead>
          <tr>
            <Th>{t('applicants.table_headers.name')}</Th>
            <Th>{t('applicants.table_headers.nation')}</Th>
            <Th>{t('applicants.table_headers.korean_language_level')}</Th>
            <Th></Th>
          </tr>
        </thead>
        <tbody>
          <List
            items={applicantList}
            renderItem={(applicant) => (
              <tr key={applicant.applyId}>
                <Td>{applicant.name}</Td>
                <Td>{applicant.applicantNation}</Td>
                <Td>{applicant.koreanLanguageLevel}</Td>
                <Td css={buttonsCellStyle}>
                  <Flex justifyContent="flex-end" alignItems="center" gap={{ x: '20px' }} css={buttonGroupStyle}>
                    <Button
                      onClick={() => profileOpenModal({ resumeId: applicant.resumeId, applyId: applicant.applyId })}
                      css={buttonStyle}
                    >
                      {t('applicants.buttons.view_resume')}
                    </Button>
                    <Button
                      design={applicant.contractExistence ? 'deactivate' : 'default'}
                      css={buttonStyle}
                      onClick={() => openModal(applicant.userId, applicant.applyId)}
                      disabled={applicant.contractExistence}
                    >
                      {applicant.contractExistence
                        ? t('applicants.buttons.complete_contract')
                        : t('applicants.buttons.create_contract')}
                    </Button>
                  </Flex>
                </Td>
              </tr>
            )}
          />
        </tbody>
      </Table>
      {selectedUserId && selectedApplyId && (
        <ContractModal isOpen={isModalOpen} close={closeModal} userId={selectedUserId} applyId={selectedApplyId} />
      )}
      {isToggle && IdInfo && (
        <Modal
          css={{
            width: '100%',
            maxWidth: '450px',
            '@media (max-width: 480px)': {
              width: '90%',
            },
          }}
          textChildren={<ApplicantProfile resumeId={IdInfo.resumeId} applyId={IdInfo.applyId} />}
          buttonChildren={<Button onClick={toggle}>닫기</Button>}
          onClose={toggle}
        />
      )}
    </>
  );
}
