import React from 'react';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Draver';
import Header from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    // fetch('https://636b93f17f47ef51e134692f.mockapi.io/item')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setItems(json));

    axios
      .get('https://636b93f17f47ef51e134692f.mockapi.io/item')
      .then((res) => setItems(res.data));
    axios
      .get('https://636b93f17f47ef51e134692f.mockapi.io/Cart')
      .then((res) => setCartItems(res.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post('https://636b93f17f47ef51e134692f.mockapi.io/Cart', obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    // console.log(id);
    axios.delete(`https://636b93f17f47ef51e134692f.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = (obj) => {
    axios.post('https://636b93f17f47ef51e134692f.mockapi.io/favorites', obj);
    setFavorites((prev) => [...prev, obj]);
  };

  // const onRemovFavorite = (id) => {
  //   // console.log(id);
  //   axios.delete(`https://636b93f17f47ef51e134692f.mockapi.io/Cart/${id}`);
  //   setFavorites((prev) => prev.filter((item) => item.id !== id));
  // };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="wrapper clear">
      {cartOpened && (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>
            {searchValue
              ? `Search on request:'${searchValue}'`
              : 'All sneakers '}
          </h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search"></img>
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear cu-p"
                src="img/btn-remove.svg"
                alt="Ciose"
              />
            )}
            <input
              value={searchValue}
              onChange={onChangeSearchInput}
              placeholder="Search..."
            ></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items
            .filter((item) =>
              item.title.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((item) => (
              <Card
                key={item.imgUrl}
                title={item.title}
                price={item.price}
                imgUrl={item.imgUrl}
                onFavorite={(obj) => onAddToFavorite(obj)}
                onPlus={(obj) => onAddToCart(obj)}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
