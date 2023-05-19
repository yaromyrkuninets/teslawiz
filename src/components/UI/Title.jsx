import '../../styles/titles.scss';

import dots from '../../assets/icons/title-dots.svg';

const Title = ({title}) => {
    return (
        <div className='title'>
            <h2 className='title__common'>
                {title}
                <img src={dots} alt="dots" className='title__img' />
            </h2>
        </div>
    )
}

export default Title;