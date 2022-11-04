import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img height={112} width={133} src={props.imgUrl} alt="sneaker" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column  ">
          <span>price</span>
          <b>{props.price} $</b>
        </div>
        <button className="button" onClick={props.onClick}>
          <img height={11} width={11} src="img/plus.svg" alt="Plus" />
        </button>
      </div>
    </div>
  );
}

export default Card;
