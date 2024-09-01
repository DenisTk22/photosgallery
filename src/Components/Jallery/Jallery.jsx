import React from 'react';
import axios from 'axios';
import { photos } from '../../photos';
import './jallery.css';
import { observer } from 'mobx-react';
import modal from '../../store/modal';

const Jallery = observer(() => {

    const url = 'http://localhost:8055/items/photosgallery'

        // fetch(url) // запрос фото с сервера
        //     .then((response) => {
        //         if (!response.ok) {
        //             throw new Error('Запрос от сервера не успешен')
        //         }
        //         return response.json(); 
        //     })
        //     .then(data => data.json())
        //     .then(response => console.log('Ответ', response))
        //     .catch(console.error('Ошибка при получении данных'))

        axios.get(url)
            .then(response => console.log('Данные>>', response.data))
            .catch(error => console.log('Ошибка>>', error))


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