import React from 'react';
import axios from 'axios';
import Info from '../info';
import { useCart } from '../../hooks/useCatr';
import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, items = [], onRemove, opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();

  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://636b93f17f47ef51e134692f.mockapi.io/orders',
        { items: cartItems }
      );

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          'https://636b93f17f47ef51e134692f.mockapi.io/Cart/' + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert('Can not make order:(');
    }
    setIsLoading(false);
  };
  return (
    <div
      className={`${styles.overlay}
    ${opened ? styles.overlayVisible : ''}
    `}
    >
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30 ">
          Cart{''}
          <img
            onClick={onClose}
            className="cu-p"
            src="img/btn-remove.svg"
            alt="Cart"
          />
        </h2>
        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items">
              {items.map((obj, index) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imgUrl})` }}
                    className="cartItemImg"
                  ></div>
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} $</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Sum</span>
                  <div></div>
                  <b>{totalPrice} $</b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} $</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Things <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Order made' : 'Cart is empty'}
            description={
              isOrderComplete
                ? `Your order #${orderId} complit`
                : 'Add some sneaker'
            }
            image={
              isOrderComplete
                ? '/img/complete-order.jpg'
                : '/img/empty-cart.jpg'
            }
          />
          // <div>
          //   <h2>Cart is empty</h2>
          //   <button onClick={onClose} className="greenButton">
          //     Return <img src="img/arrow.svg" alt="Arrow" />
          //   </button>
          // </div>
        )}

        {/* <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Sum</span>
              <div></div>
              <b>500 $</b>
            </li>
            <li>
              <span>Tax 5%:</span>
              <div></div>
              <b>25 $</b>
            </li>
          </ul>
          <button className="greenButton">
            Things <img src="img/arrow.svg" alt="Arrow" />
          </button>
        </div> */}
      </div>
    </div>
  );
}
export default Drawer;
