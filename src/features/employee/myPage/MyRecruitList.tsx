import { List } from '@/components/common';
import { MyRecruitListProps } from '@/types';
import MyRecruitCard from './MyRecruitCard';

type Props = {
  myRecruitList: MyRecruitListProps[];
};

export default function MyRecruitList({ myRecruitList }: Props) {
  return (
    <List
      items={myRecruitList}
      renderItem={(myRecruit) => <MyRecruitCard myRecruit={myRecruit} key={myRecruit.id} />}
    />
  );
}
