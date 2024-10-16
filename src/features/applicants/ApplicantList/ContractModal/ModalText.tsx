import { palettes } from '@/assets/styles/global/palettes';
import { Typo } from '@/components/common';

interface ForeignerInfoProps {
  foreignerIdNumber: string;
  visaGenerateDate: string;
}

export default function ModalText({ foreignerIdNumber, visaGenerateDate }: ForeignerInfoProps) {
  return (
    <>
      <Typo element="h3" size="18px" style={titleStyle}>
        ✅ 고용주님께 드리는 주의사항
      </Typo>
      <Typo element="p" size="14px" style={{ marginBottom: '20px' }}>
        불법 체류자를 고용할 시 최대 <strong>200만원</strong>의 범칙금이 부과될 수 있습니다.
      </Typo>
      <hr />
      <Typo element="h4" size="14px" style={{ ...titleStyle, marginTop: '20px' }}>
        지원자 정보
      </Typo>
      <Typo element="p" size="14px" style={{ marginBottom: '20px' }}>
        외국인 등록 번호 : <strong>{foreignerIdNumber}</strong>
        <br />
        비자 발급 일자 : <strong>{visaGenerateDate}</strong>
        <br />
        <br />이 지원자의 정보를 활용하여&nbsp;
        <a
          href="https://www.hikorea.go.kr/info/InfoFrnJobIdentityPageR.pt?locale=kr"
          target="_blank"
          style={{ color: `${palettes.blue}` }}
          rel="noopener noreferrer"
        >
          하이코리아
        </a>
        에서 지원자에 대한
        <br />
        불법 체류 여부를 검증할 수 있습니다.
        <br />
        <br />
        안전한 고용을 위해 확인 후 진행하는 것을 권장합니다.
      </Typo>
    </>
  );
}

const titleStyle = {
  fontWeight: 'bold',
  marginBottom: '20px',
};
