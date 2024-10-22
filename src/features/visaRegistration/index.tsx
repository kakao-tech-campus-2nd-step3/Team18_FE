import { Button, Flex, Input, Modal } from '@/components/common';
import { ChangeEvent, useMemo, useState } from 'react';
import { buttonStyle, ErrorMessage, Form, inputStyle } from './index.styles';
import { validateForeignerNumber } from './validateForeignerNumber';

export default function VisaRegistrationForm() {
  const [foreignerNumber, setForeignerNumber] = useState('');
  const [visaGenerateDate, setVisaGenerateDate] = useState('');
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formValid = useMemo(() => !error, [error]);

  const handleForeignerNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!validateForeignerNumber(value) && value !== '') {
      setError('올바른 형식으로 입력해주세요. (형식: 000000-0000000)');
    } else {
      setError('');
    }
    setForeignerNumber(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Flex direction="column" gap={{ y: '10px' }}>
          <Input
            label="외국인 번호"
            type="text"
            value={foreignerNumber}
            onChange={handleForeignerNumberChange}
            css={inputStyle}
            required
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
        </Flex>
        <Flex direction="column" gap={{ y: '10px' }}>
          <Input
            label="비자 발급 일자"
            type="date"
            value={visaGenerateDate}
            onChange={(e) => setVisaGenerateDate(e.target.value)}
            css={inputStyle}
            required
          />
        </Flex>
        <Flex justifyContent="center">
          <Button type="submit" css={buttonStyle} disabled={!formValid}>
            등록하기
          </Button>
        </Flex>
      </Form>
      {isModalOpen && (
        <Modal
          textChildren="등록이 완료되었습니다."
          buttonChildren={<Button onClick={closeModal}>확인</Button>}
          /* onClose 부분 추후 수정 예정 */
          onClose={closeModal}
        />
      )}
    </>
  );
}
