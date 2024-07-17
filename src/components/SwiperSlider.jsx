import { Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import IconsBackground from '../icons/IconsBackground';
import BtnShopNew from './btns/BtnShopNew';


function SwiperSlider() {
    return (
        <div>
            <Swiper
                modules={[Pagination, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                <SwiperSlide >
                    <div className='flex bg-orange w-[1366px] h-[361px] mx-auto relative'>
                        <img src="./images/avator1.png" alt="avator" />
                        <IconsBackground />
                        <BtnShopNew />
                        <img src="./images/avator2.png" alt="avator" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-green w-[1366px] h-[361px] mx-auto'>

                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-pink w-[1366px] h-[361px] mx-auto'>

                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default SwiperSlider