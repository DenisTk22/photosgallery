import modal from '../../store/modal';

import './card.css';

export default function Card({urlPhoto})  {

    return (
        <div className={`jallery__card ${modal.activeId === urlPhoto && modal.active}`}>
            <img className={`jallery__img`} 
                src={urlPhoto} 
                alt="card"
                />
        </div>
    )
}