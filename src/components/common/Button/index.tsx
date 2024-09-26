import styled from '@emotion/styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: 'default' | 'outlined' | 'textbutton';
}

export default function Button({ children, ...props }: Props) {
  return <Wrapper {...props}>{children}</Wrapper>;
}

const Wrapper = styled.button(
  {
    padding: '10px 40px',
    fontSize: '16px',
    fontWeight: 'bold',
    border: 'none',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: 'background-color 200ms',
  },
  ({ theme = 'default' }) => {
    if (theme === 'outlined') {
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

    if (theme === 'textbutton') {
      return {
        color: '#0A65CC',
        backgroundColor: '#fff',
      };
    }

    return {
      color: '#0A65CC',
      backgroundColor: '#E7F0FA',
    };
  },
);
