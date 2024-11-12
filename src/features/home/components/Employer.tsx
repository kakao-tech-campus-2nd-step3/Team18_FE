import { Flex, Typo, Button } from '@/components/common';
import Banner from './common/Banner';
import { responsiveStyle } from '@utils/responsive';
import { useTranslation } from 'react-i18next';
import ROUTE_PATH from '@/routes/path';
import { useNavigate } from 'react-router-dom';

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
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Banner images={defaultImage}>
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Typo element="h1" size="48px" color="white" bold style={headerStyle}>
          {t('home.greeting.heading')}
        </Typo>
        <Button design="textbutton" onClick={() => navigate(ROUTE_PATH.REGISTERCOMPANY)}>
          {t('home.greeting.button')}
        </Button>
      </Flex>
    </Banner>
  );
}
