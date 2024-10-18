import { Image } from '@components/common';
import { ReactNode } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';
import { BannerItem } from '@/types';

const BANNER_SIZE_CONFIG = { width: '100%', height: '400px' };

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

type Props = {
  images: BannerItem[];
  isSlider?: boolean;
  children?: ReactNode;
};

export default function Banner({ images, isSlider = false, children }: Props) {
  return (
    <Section>
      {isSlider ? (
        <Slider {...settings}>
          {images.map((image) => (
            <Image url={image.imageUrl} size={BANNER_SIZE_CONFIG} />
          ))}
        </Slider>
      ) : (
        <Image url={images[0].imageUrl} size={BANNER_SIZE_CONFIG} />
      )}
      {children && <ChildrenContent>{children}</ChildrenContent>}
    </Section>
  );
}

const Section = styled.section`
  position: relative;
`;

const ChildrenContent = styled.div`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
