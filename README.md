# 🍪 내가 먹은 쿠키 - 18조 FE

## 🙋‍♂️ 4주차 코드리뷰 질문
- `Modal` 컴포넌트를 구현하면서 텍스트 부분과 버튼 부분에 들어갈 내용은 개발할 때 코드를 작성하는 사람이 자유롭게 작성하여 구성할 수 있도록 `textChildren`과 `buttonChildren`만으로 구성하였는데, 더 적합하거나 지향하는 방식이 있을까요?
  
## 🙋‍♂️ 5주차 코드리뷰 질문
- 하나의 페이지 내에서만 여러번 사용되는 공통 컴포넌트의 경우, components/common 폴더에 공통 컴포넌트로 만들어 취급하는 것이 좋은지, 혹은 해당 페이지 코드 파일이 위치한 폴더에 컴포넌트를 만들거나 해당 페이지 코드 파일 하단에 작성하는 등 colocation 원칙을 적용해서 가까이 위치시키는 것이 좋을지 궁금합니다.
- `Header` 컴포넌트에서 다른 theme을 가진 버튼들에 공통된 스타일을 적용하면서, 특정 버튼에만 추가적인 스타일을 주는 작업을 했습니다. 아래와 같이 각 버튼에 공통적으로 적용될 스타일을 `commonButtonStyles`로 정의하고, `theme=default`인 버튼에만 추가 스타일을 적용해보았는데, 제가 구현한 방식보다 더 괜찮은 방법이 있는지 궁금합니다.
```javascript
const commonButtonStyles = css`
  white-space: nowrap;
  border-radius: 4px;
`;
```
```
<Button theme="outlined" css={[commonButtonStyles]}>
  채용공고 등록
</Button>
<Button theme="textbutton" css={[commonButtonStyles]}>
   닉네임
</Button>
<Button
  css={[
    commonButtonStyles,
    css`
      background-color: #0a65cc;
      color: #fff;
    `,
   ]}
>
  로그아웃
</Button>
```
