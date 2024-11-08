import { userLocalStorage } from '@/utils/storage';
import Employer from './Employer';
import Worker from './Worker';

export default function ConditionalRenderer() {
  const userType = userLocalStorage.getUser()?.type;

  if (userType === 'employee') {
    return <Worker />;
  }
  return <Employer />;
}
