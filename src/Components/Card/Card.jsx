import './card.css';

export default function Card({urlPhoto})  {

    return (
        <div className="jallery__card">
            <img className={`jallery__img`} src={urlPhoto} alt="card" />
        </div>
    )
}