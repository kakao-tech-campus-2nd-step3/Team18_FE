import { userLocalStorage } from '@/utils/storage';
import Employer from './Employer';
import Worker from './Worker';

const isWorkerType = (userType?: string): boolean => userType === 'employee' || userType === undefined;

export default function ConditionalRenderer() {
  const userType = userLocalStorage.getUser()?.type;

  if (isWorkerType(userType)) {
    return <Worker />;
  }
  return <Employer />;
}
