import * as url from 'url';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, action, makeObservable, computed, configure } from 'mobx';
import axios from 'axios';
import Card from '../Card/Card';
import { photos } from '../../photos';

import './jallery.css';

configure({ enforceActions: 'observed' });

// @observer 
export default class Jallery extends Component {

//    photos = [];

    photoSelected = (photo) => {
        console.log('photo', photo.src);
        return (
            <div className='selectedPhoto'>
                {photo}
            </div>
        )
    }


    // const displayPhotos = (data) => {
    //     data.map((url) => (
    //         <Card urlPhoto={url}/>
    //     ))
    // }

    

    render() {
    // const getPhotosUnicNumber = (url) => {
    //     fetch(url) // запрос фото с сервера
    //         .then((response) => {
    //             if (!response.ok) {
    //                 throw new Error('Запрос от сервера не успешен')
    //             }
    //             return response.json(); 
    //         })
    //         // .then((data) => displayPhotos(data))
    //         .catch(console.error('Ошибка при получении данных'))
    // }

    //     console.log(getPhotosUnicNumber('http://localhost:8055/items/photosgallery'));

        const getPhotosUnicNumber = async () => {
            try {
                const response = await axios.get('http://localhost:8055/items/photosgallery');
                return response;
            } catch (error) {
                console.error('Ошибка при получении данных', error);
            }
        }

        console.log(getPhotosUnicNumber());

        return (
            <main className='jallery'>
                {photos.map((photo) => (
                    <Card key={photo} urlPhoto={photo} onClick={() => this.photoSelected(photo)} />
                ))}
            </main>
        )
    }

}