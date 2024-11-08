import { Button, Flex, Input, Modal } from '@/components/common';
import { ChangeEvent, useMemo, useState } from 'react';
import { useRegisterVisaInfo } from '@/apis/applicants/hooks/useRegisterVisaInfo';
import { buttonStyle, ErrorMessage, Form, inputStyle } from './VisaRegistrationForm.styles';
import { validateForeignerNumber } from './validateForeignerNumber';
import { useTranslation } from 'react-i18next';

export default function VisaRegistrationForm() {
  const [foreignerIdNumber, setForeignerNumber] = useState('');
  const [visaGenerateDate, setVisaGenerateDate] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formValid = useMemo(() => !error, [error]);

  const registerVisaMutation = useRegisterVisaInfo();
  const { t } = useTranslation();

  const handleForeignerNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!validateForeignerNumber(value) && value !== '') {
      setError(t('registerVisa.error_message'));
    } else {
      setError('');
    }
    setForeignerNumber(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerVisaMutation.mutate(
      { foreignerIdNumber, visaGenerateDate },
      {
        onSuccess: () => {
          setForeignerNumber('');
          setVisaGenerateDate('');
          setIsModalOpen(true);
        },
        onError: (err) => {
          console.error(err);
        },
      },
    );
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Flex direction="column" gap={{ y: '10px' }}>
          <Input
            label={t('registerVisa.labels.foreigner_number')}
            type="text"
            value={foreignerIdNumber}
            onChange={handleForeignerNumberChange}
            css={inputStyle}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Flex>
        <Flex direction="column" gap={{ y: '10px' }}>
          <Input
            label={t('registerVisa.labels.visa_generate_date')}
            type="date"
            value={visaGenerateDate}
            onChange={(e) => setVisaGenerateDate(e.target.value)}
            css={inputStyle}
            required
          />
        </Flex>
        <Flex justifyContent="center">
          <Button type="submit" css={buttonStyle} disabled={!formValid}>
            {t('registerVisa.submit')}
          </Button>
        </Flex>
      </Form>
      {isModalOpen && (
        <Modal
          textChildren={t('registerVisa.complete_message')}
          buttonChildren={<Button onClick={closeModal}>{t('registerVisa.button')}</Button>}
          onClose={closeModal}
        />
      )}
    </>
  );
}