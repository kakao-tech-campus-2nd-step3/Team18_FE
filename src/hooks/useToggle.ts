import { useState } from 'react';

const useToggle = (): [boolean, () => void] => {
  const [isToggle, setIsToggle] = useState<boolean>(false);

  const toggle = () => setIsToggle((prev) => !prev);

  return [isToggle, toggle];
};

export default useToggle;
