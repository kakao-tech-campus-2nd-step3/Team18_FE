# 🍪 내가 먹은 쿠키 - 18조 FE

## 🙋‍♂️ 4주차 코드리뷰 질문

- `Modal` 컴포넌트를 구현하면서 텍스트 부분과 버튼 부분에 들어갈 내용은 개발할 때 코드를 작성하는 사람이 자유롭게 작성하여 구성할 수 있도록 `textChildren`과 `buttonChildren`만으로 구성하였는데, 더 적합하거나 지향하는 방식이 있을까요?

## 🙋‍♂️ 5주차 코드리뷰 질문

- 하나의 페이지 내에서만 여러번 사용되는 공통 컴포넌트의 경우, components/common 폴더에 공통 컴포넌트로 만들어 취급하는 것이 좋은지, 혹은 해당 페이지 코드 파일이 위치한 폴더에 컴포넌트를 만들거나 해당 페이지 코드 파일 하단에 작성하는 등 colocation 원칙을 적용해서 가까이 위치시키는 것이 좋을지 궁금합니다.
- `Header` 컴포넌트에서 다른 theme을 가진 버튼들에 공통된 스타일을 적용하면서, 특정 버튼에만 추가적인 스타일을 주는 작업을 했습니다. 아래와 같이 각 버튼에 공통적으로 적용될 스타일을 `commonButtonStyles`로 정의하고, `theme=default`인 버튼에만 추가 스타일을 적용해보았는데, 제가 구현한 방식보다 더 괜찮은 방법이 있는지 궁금합니다.

```jsx
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

- 태블릿(`768px`)과 모바일(`480px`)에서 반응형을 고려하여 `breakpoints`를 정의하였고, 이를 보다 명시적으로 활용하기 위해 `responsiveStyles` 함수를 구현했습니다.
멘토님께서는 보통 반응형 스타일링을 구현할 때 어떤 방식을 사용하시나요?
혹시 제가 사용한 `responsiveStyles` 함수보다 효율적이거나 코드의 가독성을 높일 수 있는 더 나은 방법이 있을까요? 멘토님이 추천하는 방법이나 일반적으로 사용되는 best practice 또한 궁금합니다.

- 현재 `Modal` 컴포넌트를 사용할 때마다 `useToggle` 커스텀 훅을 함께 사용해야 해서, 모달을 제어하기 위한 코드가 흩어져 있는 느낌입니다. 이렇게 되면 모달 관련 로직으로 인해서 단일 책임 원칙에 어긋난다는 생각이 들곤 합니다.
보다 나은 방식으로 `Modal` 컴포넌트를 동작시킬 수 있는 방법이 있을까요? `useToggle`처럼 모달을 제어하는 로직을 간소화하고, 모달 컴포넌트 자체가 스스로 상태를 관리하거나 쉽게 제어 가능한 형태로 구현할 수 있는지 궁금합니다.
