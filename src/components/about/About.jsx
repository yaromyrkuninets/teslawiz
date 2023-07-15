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
                    <Title className='id' id='about' title={'ПРО НАС'}/>
                {/* </div> */}
                <div className="about__descr">
                TeslaWiz - професійний сервіс, спеціалізуючийся на відновленні Tesla та програмуванні ключів, розташований у передмісті Львова. Ми використовуємо лише передові та сучасні технології, щоб забезпечити максимальну безпеку та ефективність наших послуг. <br /> <br />

                Наші досвідчені техніки виконують всі роботи швидко і надійно, завжди готові допомогти вам з будь-якими питаннями, пов'язаними з вашою Tesla. Ми знаємо, як відновити вашу Tesla і зробити її як нову. <br /> <br />

                Наші клієнти задоволені якістю наших послуг та рівнем професіоналізму наших техніків. Ми пишаємося тим, що маємо можливість допомогти вам зберегти безпеку вашої Tesla та надати їй нове життя.
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