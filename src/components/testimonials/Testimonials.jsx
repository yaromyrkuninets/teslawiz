import Slider from "react-slick";
import Title from '../UI/Title';

import dots from '../../assets/icons/dots.svg';
import test1 from '../../assets/image/testimonials/test1.png';
import test2 from '../../assets/image/testimonials/test2.png';
import test3 from '../../assets/image/testimonials/test3.png';
import test4 from '../../assets/image/testimonials/test4.png';
import prewArrow from '../../assets/icons/prew-arrow.svg';
import nextArrow from '../../assets/icons/next-arrow.svg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../../styles/testimonials.scss';

const Testimonials = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: <span><img className="prew-arrow" src={prewArrow} alt="prewArrow" /></span>,
        nextArrow: <span><img className="next-arrow" src={nextArrow} alt="nextArrow" /></span>,
        responsive: [
          {
            breakpoint: 1461,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 955,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 669,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <section className="testimonials">
            <div className="container">
                <Title title={'TESTIMONIALS'}/>
            </div>
            <div className="testimonials__wrapper">
                    <Slider {...settings}>
                        <div className="testimonials__card">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test1} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>

                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test2} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>

                        <div className="testimonials__card">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test3} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>

                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test4} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>

                        <div className="testimonials__card"> 
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test1} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>
                        
                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test2} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>

                        <div className="testimonials__card">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="high" />
                                <img src={test3} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>

                        <div className="testimonials__card top">
                            <div className="testimonials__img">
                                <img src={dots} alt="dots" className="bottom" />
                                <img src={test4} alt="test" />
                            </div>
                            <div className="testimonials__title">
                                <div className="testimonials__name">
                                    Hunter Johnson
                                </div>
                                <div className="testimonials__date">
                                    12 April, 2023
                                </div>
                            </div>
                            <div className="testimonials__descr">
                                I'm very happy with the company! Staff were friendly, helpful and efficient. Work was done quickly, with high quality and reasonable price. I'd recommend to friends and come back for next service!
                            </div>
                        </div>
                    </Slider>
            </div>
        </section>
    )
}

export default Testimonials;