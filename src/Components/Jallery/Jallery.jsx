import React from 'react';
import { photos } from '../../photos';
import './jallery.css';
import { observer } from 'mobx-react';
import modal from '../../store/modal';

const Jallery = observer(() => {

    return (
        <main className='jallery'>
            {photos.map((photo) => (
                <div key={photo} className={`jallery__card ${modal.activeId === photo && modal.active}`}>
                    <img className={`jallery__img`}
                         src={photo}
                         alt="card"
                         onClick={() => modal.handleClick(photo)} />
                </div>
            ))}
        </main>
    )
})

export default Jallery