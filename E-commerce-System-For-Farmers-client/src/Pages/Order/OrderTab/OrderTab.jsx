
// import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import { Pagination } from "swiper/modules";


const OrderTab = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
          <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10'>
                        {
                            items.map(item => <ProductCard
                                key={item._id}
                                item={item}
                            ></ProductCard>)
                        }
                    </div>

                </SwiperSlide>

            </Swiper>  
        </div>
    );
};

export default OrderTab;