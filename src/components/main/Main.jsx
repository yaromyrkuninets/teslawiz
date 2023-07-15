import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import tesla from '../../assets/icons/mobile_bg.svg'

import '../../styles/main.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__block">
                    <h1 className="main__title">
                        Ремонт <br /> Tesla
                    </h1>
                    <img src={tesla} className='main__mobile-bg' alt="tesla" />
                    <div className="main__descr">
                        <b>TeslaWiz</b> це професійний сервіс з відновлення та програмування ключів для Tesla з використанням передових технологій для максимальної безпеки та ефективності. Ми подаруємо вашій Tesla нове життя.
                    </div>
                    <motion.button whileTap={{scale: 1.2}} className='main__btn'>
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500} >Дізнатися більше</Link>
                    </motion.button>
                </div>
            </div>
        </main>
    )
}

export default Main;