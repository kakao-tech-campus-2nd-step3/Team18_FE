import { Button } from '@/components/common';
import { ReactNode } from 'react';

type Props = {
  design?: 'default' | 'outlined' | 'textbutton' | 'deactivate';
  children: ReactNode;
};

export default function CardButton({ design, children }: Props) {
  return (
    <Button
      design={design}
      style={{
        width: '250px',
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
      }}
    >
      {children}
    </Button>
  );
}
