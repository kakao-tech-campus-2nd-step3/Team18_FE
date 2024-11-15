import Typo from '../Typo';

type Props = {
  text: string;
  size?: string;
};

export default function Title({ text, size }: Props) {
  const fontSize = size ? size : '24px';
  return (
    <Typo element="h1" size={fontSize} style={{ fontWeight: 'bold', marginBottom: '24px' }}>
      {text}
    </Typo>
  );
}
