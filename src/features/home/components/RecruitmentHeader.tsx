import { Flex, Typo } from '@components/common';
import { responsiveStyle } from '@utils/responsive';

export default function RecruitmentHeader() {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      css={{
        marginBottom: '60px',
        ...responsiveStyle({
          mobile: {
            marginBottom: '32px',
            justifyContent: 'center',
          },
        }),
      }}
    >
      <div
        css={responsiveStyle({
          mobile: {
            textAlign: 'center',
          },
        })}
      >
        <Typo
          element="h1"
          size="38px"
          bold
          style={{
            marginBottom: '16px',
            ...responsiveStyle({
              mobile: {
                marginBottom: '12px',
                fontSize: '28px',
              },
            }),
          }}
        >
          어떤 일자리를 구하시나요?
        </Typo>
        <Typo
          element="span"
          color="gray"
          size="24px"
          style={responsiveStyle({
            mobile: {
              fontSize: '18px',
            },
          })}
        >
          조건을 선택하고 원하는 일자리를 골라보세요.
        </Typo>
      </div>
    </Flex>
  );
}
