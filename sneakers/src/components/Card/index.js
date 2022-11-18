import React from 'react';
import { useState } from 'react';
import styles from './Card.module.scss';

function Card({ onFavorite, onPlus, imgUrl, title, price }) {
  const [isAdded, setIsAdded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const onClickPlus = () => {
    onPlus({ title, imgUrl, price });
    setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite({ title, imgUrl, price });
    setIsFavorite(!isFavorite);
  };
  // React.useEffect(() => {
  //   console.log('Change');
  // }, [isAdded]);
  return (
    <div className={styles.card}>
      <div className={styles.favorite} onClick={onClickFavorite}>
        <img
          src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'}
          alt="Unliked"
        />
      </div>
      <img height={112} width={133} src={imgUrl} alt="sneaker" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column  ">
          <span>price</span>
          <b>{price} $</b>
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
