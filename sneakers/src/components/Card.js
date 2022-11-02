function Card() {
  return (
    <div className="card">
      <div className="favorite">
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img height={112} width={133} src="img/sneakers/1.jpg" alt="sneaker" />
      <h5>Nike Blazer for men</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column  ">
          <span>price</span>
          <b>500 $</b>
        </div>
        <button className="button">
          <img height={11} width={11} src="img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
