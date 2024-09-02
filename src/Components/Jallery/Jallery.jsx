import React from 'react';
import axios from 'axios';
import { photos } from '../../photos';
import '../../css/style.css';
import Card from '../Card/Card';

const Jallery = () => {

    const url = 'http://localhost:8055/items/photosgallery/1'

        fetch(url) // запрос фото с сервера
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Запрос от сервера не успешен')
                }
                return response.json(); 
            })
            .then(data => data.json())
            .then(response => console.log('Ответ', response))
            .catch(console.error('Ошибка при получении данных'))

        // axios.get(url)
        //     .then(response => console.log('Данные>>', response.data))
        //     .catch(error => console.log('Ошибка>>', error))

    return (
        <main className='jallery'>
            {photos.map((photo, iPhoto) => (
                <Card 
                    key={photo}
                    urlPhoto={photo} 
                    i={iPhoto}
                    array={photos}
                />
            ))}
        </main>
    )}

export default Jallery;