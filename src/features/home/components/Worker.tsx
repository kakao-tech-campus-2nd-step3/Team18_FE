import Banner from './common/Banner';
import { images } from '@/pages/home/data/index.mock';

export default function Worker() {
  return <Banner images={images} isSlider />;
}
