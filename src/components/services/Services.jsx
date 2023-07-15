import Title from "../UI/Title";

import '../../styles/services.scss'; 

import ccs2 from '../../assets/icons/services/ccs2.svg';
import keyprog from '../../assets/icons/services/keyprog.svg';
import navigation from '../../assets/icons/services/navigation.svg';
import autopilot from '../../assets/icons/services/autopilot.svg';
import srs from '../../assets/icons/services/srs.svg';
import carRepair from '../../assets/icons/services/car_repair.svg';
import rightDots from '../../assets/icons/right-dots.svg';
import leftDots from '../../assets/icons/left-dots.svg';

const Services = () => {
    return (
        <section className='services' id="services">
            <div className="title-top">
                <div className="container">
                    <Title id='services' title={'ПОСЛУГИ'}/>
                </div>
            </div>
            <div className="services__items">
                <div className="services__wrapper">
                    <img src={rightDots} alt="rightDots" className="services__right-dots" />
                    <img src={leftDots} className="services__left-dots" alt="leftDots" />
                    <div className="services__item">
                        <img src={ccs2} alt="ccs2" />
                        <div className="services__title">
                            Встановлення <br /> CCS2 модифікацій
                        </div>
                    </div>
                    <div className="services__item">
                        <img src={keyprog} alt="keyprog" />
                        <div className="services__title">
                            Програмування та відновлення ключів у разі втрати
                        </div>
                    </div>
                    <div className="services__item navigation">
                        <img src={navigation} alt="navigation" />
                        <div className="services__title">
                        Установка європейської навігації
                        </div>
                    </div>
                    <div className="services__item autopilot">
                        <img src={autopilot} alt="autopilot" />
                        <div className="services__title">
                            Активація <br /> автопілота
                        </div>
                    </div>
                    <div className="services__item">
                        <img src={srs} alt="srs" />
                        <div className="services__title">
                        Прошивка SRS <br /> блоків
                        </div>
                    </div>
                    <div className="services__item">
                        <img src={carRepair} alt="carRepair" />
                        <div className="services__title">
                            Комплексний <br /> ремонт Tesla
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services