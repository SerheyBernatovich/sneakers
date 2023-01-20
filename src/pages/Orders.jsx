import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
  const { onAddToFavorite, onAddToCart } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          'https://636b93f17f47ef51e134692f.mockapi.io/orders'
        );
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
        //   console.log(data.map((obj) => obj.items.flat()));
        //   console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));
      } catch (error) {
        alert('mistake');
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My orders</h1>
      </div>

      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(10)] : orders).map((item, index) => (
          <Card
            key={index}
            // onFavorite={(obj) => onAddToFavorite(obj)}
            // onPlus={(obj) => onAddToCart(obj)}
            loading={isLoading}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}
export default Orders;
