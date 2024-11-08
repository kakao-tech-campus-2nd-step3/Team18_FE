import { Modal } from '@/components/common';
import ModalText from './ModalText';
import { useGetForeigner } from '@/apis/applicants/hooks/useGetForeigner';
import ModalButtons from './ModalButtons';

interface ContractModalProps {
  isOpen: boolean;
  close: () => void;
  userId: number;
  applyId: number;
}

export default function ContractModal({ isOpen, close, userId, applyId }: ContractModalProps) {
  const { data: foreigner } = useGetForeigner(userId);

  return (
    <>
      {isOpen && foreigner && (
        <Modal
          textChildren={
            <ModalText foreignerIdNumber={foreigner.foreignerIdNumber} visaGenerateDate={foreigner.visaGenerateDate} />
          }
          buttonChildren={<ModalButtons applyId={applyId} onClose={close} />}
          onClose={close}
          style={{ padding: '15px' }}
        />
      )}
    </>
  );
}
