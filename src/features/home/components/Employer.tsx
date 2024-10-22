import { Flex, Typo, Button } from '@/components/common';
import Banner from './common/Banner';
import { responsiveStyle } from '@utils/responsive';

const defaultImage = [
  { id: 1, imageUrl: 'https://www.v-on.kr/wp-content/uploads/2022/06/IT_twi001t2302755-1024x683.jpg' },
];

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
    <Banner images={defaultImage}>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Typo element="h1" size="48px" color="white" bold style={headerStyle}>
          {`사장님,\n 공고 등록은 하셨나요? 🤔`}
        </Typo>
        <Button theme="textbutton">등록하러 가기</Button>
      </Flex>
    </Banner>
  );
}
