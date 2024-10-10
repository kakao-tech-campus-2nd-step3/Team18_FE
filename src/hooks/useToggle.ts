import { useState } from 'react';

const useToggle = (): [boolean, () => void] => {
  const [enable, setEnable] = useState(false);

  const toggle = () => setEnable((prev) => !prev);

  return [enable, toggle];
};

export default useToggle;
