function Card(props) {
  // const [title, ]
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img height={112} width={133} src={props.imgUrl} alt="sneaker" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column  ">
          <span>price</span>
          <b>{props.price} $</b>
        </div>
        <button className="button">
          <img height={11} width={11} src="img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
