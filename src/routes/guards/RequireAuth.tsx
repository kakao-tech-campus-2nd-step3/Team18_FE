import { userLocalStorage } from '@/utils/storage';
import { useNavigate } from 'react-router-dom';
import ROUTE_PATH from '../path';
import { ReactNode, useEffect } from 'react';

interface RequireAuthProps {
  children: ReactNode;
  expectedType: 'employee' | 'employer';
}

export function RequireAuth({ children, expectedType }: RequireAuthProps) {
  const user = userLocalStorage.getUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.type !== expectedType) {
      navigate(ROUTE_PATH.HOME);
    }
  }, [user, expectedType, navigate]);

  return user && user.type === expectedType ? children : null;
}
