import Card from '../Card/Card';
import { photos } from '../../photos';

import './jallery.css';

function Jallery() {

    // const getPhotos = (url) => {
    //     fetch(url) // запрос фото с сервера
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Запрос от сервера не успешен')
    //             }
    //             return response.json(); 
    //         })
    //         .then((data) => displayPhotos(data))
    //         .catch(console.error('Ошибка данных'))
    // }

    // const displayPhotos = (data) => {
    //     data.map((url) => (
    //         <Card urlPhoto={url}/>
    //     ))
    // }

    return (
        <main className='jallery'>
            {photos.map((photo) => (
                <Card urlPhoto={photo} />
            ))}
        </main>
    )
}

export default Jallery;