import "../assets/css/Card.css";

function Card(props) {
    return <div className="card">
        <img src={props.imageUrl} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </div>
}

export default Card;