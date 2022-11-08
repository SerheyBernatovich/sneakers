import React from 'react';
import { useEffect, useState } from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const [isAdded, setIsAdded] = useState(false);
  const onClickPlus = () => {
    setIsAdded(!isAdded);
  };
  // useEffect(() => {
  //   console.log('Change');
  // }, [isAdded]);
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={props.onFavorite}>
        <img src="img/unliked.svg" alt="Unliked" />
      </div>
      <img height={112} width={133} src={props.imgUrl} alt="sneaker" />
      <h5>{props.title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column  ">
          <span>price</span>
          <b>{props.price} $</b>
        </div>

        <img
          className={styles.plus}
          onClick={onClickPlus}
          src={isAdded ? 'img/btn-checked.svg' : 'img/btn-plus.svg'}
          alt="Plus"
        />
      </div>
    </div>
  );
}

export default Card;
