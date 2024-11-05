# 🍪 내가 먹은 쿠키 - 18조 FE

## 🙋‍♂️ 9주차 코드리뷰 질문

컴포넌트에는 개발하면서 페이지 내에서 임시로 만들어 사용하는 컴포넌트가 있고, 공통 컴포넌트로 개발해둔 것이 있고, 라이브러리에서 가져와서 사용하는 컴포넌트가 있습니다. 그런데 이런 컴포넌트를 필요에 따라 혼용해서 사용하니까 헷갈리기도 합니다. 이런 컴포넌트 사용에 있어서 지키면 좋을 규칙같은 게 있을까요?

예를 들어 아래에서 Section은 제가 해당 컴포넌트 내에서만 사용하려고 만든 컴포넌트이고, Typo는 공통컴포넌트로 이전에 개발한 컴포넌트입니다.
```tsx
        <Section>
          <Typo bold element="h3" size="20px" style={{ marginBottom: '24px' }}>
            내가 지원한 공고
          </Typo>
          {myRecruitList && <MyRecruitList myRecruitList={myRecruitList} />}
        </Section>
      </InnerContainer>
    </Layout>
  );
}

const Section = styled.div`
  width: 100%;
  direction: column;
  align-items: center;
  margin-bottom: 52px;
`;

