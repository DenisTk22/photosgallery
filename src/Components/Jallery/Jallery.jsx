import React, { Component } from 'react';
import Card from '../Card/Card';
import { photos } from '../../photos';
import './jallery.css';

export default class Jallery extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {'active': false};
    // }

    state = {
        active: null // первоначальное значение
      }

      handleClick(e, id) {
        this.setState({ active: id })
      }

      toggleClass(e) {
        if(e.target.parentElement.classList.contains('active')){
          e.target.parentElement.classList.remove('active')
        }else{
          e.target.parentElement.classList.add('active')
        }
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


        return (
            <main className='jallery'>
                {photos.map((photo) => (
                        <div key={photo}  className={`jallery__card`}>
                            <img className={`jallery__img`} //className={`jallery__img ${this.state.active ? "active" : ""}`
                                 src={photo} 
                                 alt="card" 
                                 onClick= {this.toggleClass.bind(this)} />  
                                 {/* onClick= {this.toggleClass.bind(this, photo)} */}
                        </div>
                ))}
            </main>
        )
    }

}