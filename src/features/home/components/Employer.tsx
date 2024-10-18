import { Flex, Typo, Button } from '@/components/common';
import Banner from './common/Banner';
import { images } from '@pages/home/data/index.mock';
import { responsiveStyle } from '@utils/responsive';

const headerStyle = responsiveStyle({
  default: {
    marginBottom: '40px',
    whiteSpace: 'pre-line',
    textAlign: 'center',
  },
  tablet: {
    fontSize: '36px',
    marginBottom: '32px',
  },
  mobile: {
    fontSize: '28px',
    marginBottom: '28px',
  },
});

export default function Employer() {
  return (
    <>
      <Banner images={images}>
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Typo element="h1" size="48px" color="white" bold style={headerStyle}>
            {`사장님,\n 공고 등록은 하셨나요? 🤔`}
          </Typo>
          <Button theme="textbutton">등록하러 가기</Button>
        </Flex>
      </Banner>
    </>
  );
}
