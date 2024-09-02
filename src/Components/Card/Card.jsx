import modal from '../../store/modal';
import '../../css/style.css';
import { observer } from 'mobx-react';

const Card = observer(({urlPhoto, i, array}) => {

    return (
        <div 
            className={`jallery__card ${modal.activeId === urlPhoto && modal.active}`}
        >
                <img 
                    className={`jallery__img`} 
                    src={urlPhoto} 
                    alt="card"
                    onClick={() => modal.handleClick(urlPhoto)}
                />
            <div className={`buttons ${modal.activeId === urlPhoto &&modal.buttonsActive}`}>
                <button className='buttons__button' onClick={() => modal.previousPhoto(i, array)}>влево</button>
                <button className='buttons__button' onClick={() => modal.nextPhoto(i, array)}>вправо</button>
                </div>

        </div>
    )
})

export default Card;