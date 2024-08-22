import './jallery__card.css';

export const Card = (urlPhoto) => {

    return (
        <div className="jallery__card">
            <img className='jallery__img' src={urlPhoto} alt="card" />
        </div>
    )
}