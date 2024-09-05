import modal from '../../store/modal';
import '../../css/style.css';
import { observer } from 'mobx-react';
import Button from '../Button/Button';
import { observable } from 'mobx';

const Card = observer(({urlPhoto, i, array}) => {

    // observable(<Button/>)

    return (
        <div 
            className={`jallery__card 
                ${modal.activeId === urlPhoto && modal.active}
                `} //если текущее значение activeId из modal совпадает c urlPhoto картинки по которой кликнули, то значение класса примет значение modal.active
        >
            <img 
                className={`jallery__img`} 
                src={urlPhoto} 
                alt="card"
                onClick={() => modal.handleClick(urlPhoto)}
            />
            <div className={`buttons ${modal.activeId === urlPhoto && modal.buttonsActive}`}>
                {/* <Button 
                    text={'влево'} 
                    // onClick={() => modal.previousPhoto(i, array)}
                /> */}
                <button className='buttons__button' onClick={() => modal.previousPhoto(i, array)}>влево</button>
                <button className='buttons__button' onClick={() => modal.nextPhoto(i, array)}>вправо</button>
            </div>

        </div>
    )
})

export default Card;