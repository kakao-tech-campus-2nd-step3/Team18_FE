import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import profileImage from '@assets/images/profile-image.svg';

const initialData = {
  type: 'employer',
  profileImage: profileImage,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header profileImage={initialData.profileImage} />
      {children}
      <Footer />
    </>
  );
}
