import { Image } from '@components/common';
import { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { BannerItem } from '@/types';

type Props = {
  images: BannerItem[];
  isSlider?: boolean;
  children?: ReactNode;
};

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

export default function Banner({ images, isSlider = false, children }: Props) {
  return (
    <section css={{ position: 'relative' }}>
      {isSlider ? (
        <Slider {...settings}>
          {images.map((image) => (
            <Image url={image.imageUrl} size={bannerImageSize} />
          ))}
        </Slider>
      ) : (
        <Image url={images[0].imageUrl} size={bannerImageSize} />
      )}
      {children && <ChildrenContent>{children}</ChildrenContent>}
    </section>
  );
}

const bannerImageSize = {
  width: '100%',
  height: '400px',
};

const ChildrenContent = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
