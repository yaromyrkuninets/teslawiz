import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

import '../../styles/main.scss';

const Main = () => {
    return (
        <main className="main">
            <div className="main__container">
                <div className="main__block">
                    <h1 className="main__title">
                        Repairing <br /> Tesla
                    </h1>
                    <div className="main__descr">
                        <b>TeslaWiz</b> is a professional service for restoring and programming keys for Tesla, using advanced technologies for maximum safety and efficiency. We will give your Tesla a new life.
                    </div>
                    <motion.button whileTap={{scale: 1.2}} className='main__btn'>
                        <Link to="about" spy={true} smooth={true} offset={-20} duration={500} >Learn More</Link>
                    </motion.button>
                </div>
            </div>
        </main>
    )
}

export default Main;