import Banner from './common/Banner';
import { useFetchSlides } from '@/apis/home/queries/useFetchSlides';

export default function Worker() {
  const { data: images } = useFetchSlides();

  return <Banner images={images} isSlider />;
}
