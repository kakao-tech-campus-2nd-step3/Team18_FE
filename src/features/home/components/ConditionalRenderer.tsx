import Employer from './Employer';
import Worker from './Worker';

export default function ConditionalRenderer() {
  if (localStorage.getItem('userType') === 'employee') {
    return <Worker />;
  }
  return <Employer />;
}
