import React from 'react';
import ContentLoader from 'react-content-loader';
import AppContext from '../../context';
import { useState } from 'react';
import styles from './Card.module.scss';

function Card({
  id,
  onFavorite,
  onPlus,
  imgUrl,
  title,
  price,
  favorited = false,
  // added = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  const [isFavorite, setIsFavorite] = useState(favorited);
  const obj = { id, parentId: id, title, imgUrl, price };

  const onClickPlus = () => {
    onPlus(obj);
    // setIsAdded(!isAdded);
  };

  const onClickFavorite = () => {
    onFavorite(obj);
    setIsFavorite(!isFavorite);
  };
  // React.useEffect(() => {
  //   console.log('Change');
  // }, [isAdded]);
  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={165}
          height={250}
          viewBox="0 0 160 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="3" rx="10" ry="10" width="150" height="155" />
          <rect x="60" y="100" rx="0" ry="0" width="57" height="27" />
          <rect x="0" y="400" rx="0" ry="0" width="400" height="78" />
          <rect x="98" y="149" rx="0" ry="0" width="2" height="30" />
          <rect x="89" y="137" rx="0" ry="0" width="1" height="5" />
          <rect x="76" y="104" rx="0" ry="0" width="80" height="2" />
          <rect x="90" y="183" rx="0" ry="0" width="0" height="1" />
          <rect x="0" y="167" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="195" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="233" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={isFavorite ? 'img/liked.svg' : 'img/unliked.svg'}
                alt="Unliked"
              />
            </div>
          )}

          <img height={110} width={135} src={imgUrl} alt="sneaker" />
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column  ">
              <span>price:</span>
              <b>{price}$ </b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                src={
                  isItemAdded(id) ? 'img/btn-checked.svg' : 'img/btn-plus.svg'
                }
                alt="Plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
