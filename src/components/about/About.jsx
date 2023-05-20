import Title from "../UI/Title";

import bigDots from '../../assets/icons/big-dots.svg';
import serviceCenter from '../../assets/image/about_us/service_center.jpg';
import car from '../../assets/image/about_us/car.jpg';
import key from '../../assets/image/about_us/key.jpg';

import '../../styles/about.scss';

export const About = () => {
    return (
        <section className="about">
            <div className="about__us">
                {/* <div className="about__container"> */}
                    <Title className='id' id='about' title={'ABOUT US'}/>
                {/* </div> */}
                <div className="about__descr">
                    TeslaWiz is a professional service specializing in Tesla restoration and key programming, located in the suburbs of Lviv. We use only cutting-edge and modern technologies to ensure maximum safety and efficiency in our services. <br /> <br />

                    Our experienced technicians perform all work quickly and reliably, always ready to assist you with any questions related to your Tesla. We know how to restore your Tesla and make it like new. <br /> <br />

                    Our customers are satisfied with the quality of our services and the level of professionalism of our technicians. We take pride in being able to help you keep your Tesla safe and give it a new life.
                </div> 
            </div>
            <div className="about__img-block">
                <img src={bigDots} alt="big dots" className="about__big-dots" />
                <div className="about__img-wrapper">
                    <img src={serviceCenter} alt="Service Center" className="about__service" />
                    <img src={car} alt="car" />
                    <img src={key} alt="key" />
                </div>
            </div>
        </section>
    )
}