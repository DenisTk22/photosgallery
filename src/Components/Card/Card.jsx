import modal from '../../store/modal';
import '../../css/style.css';
import { observer } from 'mobx-react';

const Card = observer(({urlPhoto}) => {

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
        </div>
    )
})

export default Card;