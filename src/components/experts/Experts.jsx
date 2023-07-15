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
                <Title title={'НАШІ ЕКСПЕРТИ'}/>
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
                                Володимир
                            </div>
                            <div className="experts__subtitle">
                                Інженер-електрик
                            </div>
                        </div>
                        <div className="experts__descr">
                        Володимир - висококваліфікований автоелектрик, який працює швидко та ефективно. Він здійснює ремонт автоелектричних систем з професійним підходом та забезпечує надійні результати.
                        </div>
                    </div>

                    <div className="experts__block">
                        <div className="experts__img">
                            <img src={dots} alt="dots" className="experts__dots"/>
                            <img src={painter} alt="painter" />
                        </div>
                        <div className="experts__name">
                            <div className="experts__title">
                                Сергій
                            </div>
                            <div className="experts__subtitle">
                                Художник
                            </div>
                        </div>
                        <div className="experts__descr">
                        Сергій - висококваліфікований автомаляр, який працює швидко та ефективно. Він має бездоганні знання у цій галузі і завжди залишає клієнтів задоволеними своїм професійним підходом та надійними результатами.
                        </div>
                    </div>

                    <div className="experts__block">
                        <div className="experts__img">
                            <img src={dots} alt="dots" className="experts__dots"/>
                            <img src={diagnostic} alt="diagnostic" />
                        </div>
                        <div className="experts__name">
                            <div className="experts__title">
                                Іван
                            </div>
                            <div className="experts__subtitle">
                                Діагностик
                            </div>
                        </div>
                        <div className="experts__descr">
                        Іван - відмінний спеціаліст з автодіагностики, який працює швидко та ефективно. Він має бездоганні знання у цій галузі і завжди точно та професійно виявляє проблеми з автомобілем.
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experts;