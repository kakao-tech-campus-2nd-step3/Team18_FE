import { useRef } from 'react';
import ReactSignatureCanvas from 'react-signature-canvas';
import SignatureCanvas from 'react-signature-canvas';
import { Buffer } from 'buffer';
import styled from '@emotion/styled';
import Layout from '@/features/layout';
import { Flex, Button } from '@/components/common';
import { FetchRegisterSign } from '@/apis/registerSign/useRegisterSign';
import { useTranslation } from 'react-i18next';
import { userLocalStorage } from '@/utils/storage';

export default function RegisterSign() {
  const userType = userLocalStorage.getUser()?.type || '';
  const signCanvas = useRef<ReactSignatureCanvas>(null);
  const { t } = useTranslation();
  const clear = () => {
    signCanvas.current?.clear();
  };
  const mutation = FetchRegisterSign(userType);

  const convertDataUrlToFile = () => {
    const dataURL = signCanvas.current?.toDataURL('image/png');
    const decodedURL = dataURL?.replace(/^data:image\/\w+;base64,/, '') as string;
    const buf = Buffer.from(decodedURL, 'base64');
    const blob = new Blob([buf], { type: 'image/png' });
    return new File([blob], `signature_${Date.now()}.png`, { type: 'image/png' });
  };

  const onSave = () => {
    const file = convertDataUrlToFile();
    const formData = new FormData();
    formData.append('imageUrl', file);
    mutation.mutate(formData);
  };

  return (
    <Layout>
      <Flex
        css={{ width: '100%', height: '100vh' }}
        direction="column"
        justifyContent="center"
        alignItems="center"
        gap={{ y: '20px' }}
      >
        <WrapperCanvas>
          <SignatureCanvas
            ref={signCanvas}
            penColor="black"
            canvasProps={{
              style: {
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: '#FFF',
              },
            }}
            clearOnResize={false}
          />
        </WrapperCanvas>
        <Flex justifyContent="center" gap={{ x: ' 20px' }}>
          <CustomBtn onClick={clear}>{t('registerSign.reset')}</CustomBtn>
          <CustomBtn onClick={() => onSave()}>{t('registerSign.registerSign')}</CustomBtn>
        </Flex>
      </Flex>
    </Layout>
  );
}

const WrapperCanvas = styled.div`
  position: relative;
  border: 20px solid #e7f0fa;
  width: 60%;
  height: 400px;
  @media (max-width: 1024px) {
    width: 70%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (max-width: 480px) {
    width: 90%;
  }
`;

const CustomBtn = styled(Button)`
  background: #0a65cc;
  color: white;
  border: 1px solid #e4e5e8;
  &:hover {
    border: '2px solid #0A65CC';
    background: white;
    color: #0a65cc;
  }
`;
