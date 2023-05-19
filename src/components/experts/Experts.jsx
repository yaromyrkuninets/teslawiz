import Title from '../UI/Title';

import engineer from '../../assets/image/experts/engineer.png';
import painter from '../../assets/image/experts/painter.png';
import diagnostic from '../../assets/image/experts/diagnostic.png';
import dots from '../../assets/icons/dots.svg';

import '../../styles/experts.scss';

const Experts = () => {
    return (
        <section className="experts" id='team'>
            <div className="container">
                <Title title={'OUR EXPERTS'}/>
            </div>

            <div className="experts__wrapper">
                <div className="experts__blocks">
                    <div className="experts__block">
                        <div className="experts__img">
                            <img src={dots} alt="dots" className="experts__dots" />
                            <img src={engineer} alt="engineer" />
                        </div>
                        <div className="experts__name">
                            <div className="experts__title">
                                Volodymyr
                            </div>
                            <div className="experts__subtitle">
                                Electrical Engineer
                            </div>
                        </div>
                        <div className="experts__descr">
                            Volodymyr is a top-notch auto electrician who works quickly and efficiently. He repairs auto electric systems with a professional approach and provides reliable results.
                        </div>
                    </div>

                    <div className="experts__block">
                        <div className="experts__img">
                            <img src={dots} alt="dots" className="experts__dots"/>
                            <img src={painter} alt="painter" />
                        </div>
                        <div className="experts__name">
                            <div className="experts__title">
                                Sergiy
                            </div>
                            <div className="experts__subtitle">
                                Painter
                            </div>
                        </div>
                        <div className="experts__descr">
                            Sergiy is a top-notch auto painter who works quickly and efficiently. He has impeccable knowledge in the field and always leaves clients satisfied with his professional approach and reliable results.
                        </div>
                    </div>

                    <div className="experts__block">
                        <div className="experts__img">
                            <img src={dots} alt="dots" className="experts__dots"/>
                            <img src={diagnostic} alt="diagnostic" />
                        </div>
                        <div className="experts__name">
                            <div className="experts__title">
                                Ivan
                            </div>
                            <div className="experts__subtitle">
                                Diagnostic
                            </div>
                        </div>
                        <div className="experts__descr">
                            Ivan is an excellent auto diagnostic specialist who works quickly and efficiently, and  has impeccable knowledge in the field and always identifies car problems with precision and professionalism.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experts;