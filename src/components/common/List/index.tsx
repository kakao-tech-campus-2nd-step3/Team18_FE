import { ReactNode } from 'react';

interface Props<T> {
  items: T[];
  renderItem: (item: T) => ReactNode;
}

export default function List<T>({ items, renderItem }: Props<T>) {
  return <>{items.map((item) => renderItem(item))}</>;
}
