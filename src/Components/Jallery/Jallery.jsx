import React, { Component } from 'react';
import Card from '../Card/Card';
import { photos } from '../../photos';
import './jallery.css';

export default class Jallery extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isClassActive: false,
    //     };
    // }

    state = {
        activeId: null // первоначальное значение
      }

      handleClick(e, id) {
        this.setState({ activeId: id })
      }

    // Функция переключения класса 
    // toggleClass = () => {
    //     this.setState({
    //         isClassActive: !this.state.isClassActive,
    //     });
    // };

    // photoSelected = (photo) => {
    //     console.log('photo', photo.src);
    //     return (
    //         <div className='selectedPhoto'>
    //             {photo}
    //         </div>
    //     )
    // }


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


        return (
            <main className='jallery'>
                {photos.map((photo) => (
                        <div key={photo}  className={`jallery__card`}>
                            <img className={`jallery__img ${this.state.activeId ? "active" : ""}`}
                                 src={photo} 
                                 alt="card" 
                                 onClick= {this.handleClick.bind(this, photo)} />
                        </div>
                ))}
            </main>
        )
    }

}