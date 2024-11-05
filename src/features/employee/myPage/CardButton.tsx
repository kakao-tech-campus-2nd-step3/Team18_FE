import { Button } from '@/components/common';
import React, { ReactNode } from 'react';

type Props = {
  design?: 'default' | 'outlined' | 'textbutton' | 'deactivate';
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CardButton({ design, children, ...rest }: Props) {
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
      {...rest}
    >
      {children}
    </Button>
  );
}
