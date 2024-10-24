import styled from '@emotion/styled';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  design?: 'default' | 'outlined' | 'textbutton' | 'deactivate';
}

export default function Button({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.button<Props>(
  {
    padding: '10px 40px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '4px',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms',
  },
  ({ design = 'default' }) => {
    if (design === 'outlined') {
      return {
        backgroundColor: '#fff',
        color: '#0A65CC',
        border: '2px solid #0A65CC',

        '&:hover': {
          backgroundColor: '#6992C0',
          color: '#fff',
        },
      };
    }

    if (design === 'textbutton') {
      return {
        color: '#0A65CC',
        backgroundColor: '#fff',
      };
    }

    if (design === 'deactivate') {
      return {
        color: '#9A9A9A',
        backgroundColor: '#D9D9D9',
      };
    }

    return {
      color: '#0A65CC',
      backgroundColor: '#E7F0FA',
    };
  },
);
