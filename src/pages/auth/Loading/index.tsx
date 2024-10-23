import { Spinner, Typo } from '@/components/common';
import { useGoogleOAuth } from '@/apis/auth/mutations/useGoogleOAuth';

export default function LoadingPage() {
  const { isLoading } = useGoogleOAuth();

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <Typo element="h1" size="18px" bold color="blue">
          로그인 처리 중 오류가 발생했습니다.
        </Typo>
      )}
    </div>
  );
}
