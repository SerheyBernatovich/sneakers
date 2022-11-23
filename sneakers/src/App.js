import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Card from './components/Card';
import Drawer from './components/Draver';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

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
    async function fetchData() {
      const cartResponse = await axios.get(
        'https://636b93f17f47ef51e134692f.mockapi.io/Cart'
      );

      const favoritesResponse = await axios.get(
        'https://636b93f17f47ef51e134692f.mockapi.io/favorites'
      );
      const itemResponse = await axios.get(
        'https://636b93f17f47ef51e134692f.mockapi.io/item'
      );

      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = (obj) => {
    try {
      if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
        axios.delete(
          `https://636b93f17f47ef51e134692f.mockapi.io/Cart/${obj.id}`
        );
        setCartItems((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
      } else {
        axios.post('https://636b93f17f47ef51e134692f.mockapi.io/Cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
    } catch (error) {}
  };

  const onRemoveItem = (id) => {
    // console.log(id);
    axios.delete(`https://636b93f17f47ef51e134692f.mockapi.io/Cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onAddToFavorite = async (obj) => {
    // console.log(obj);
    try {
      if (favorites.find((favObj) => favObj.id === obj.id)) {
        axios.delete(
          `https://636b93f17f47ef51e134692f.mockapi.io/favorites/${obj.id}`
        );
        // setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          'https://636b93f17f47ef51e134692f.mockapi.io/favorites',
          obj
        );
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('error in favorires');
    }
  };

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
      <Route path="/" exact>
        <Home
          items={items}
          cartItems={cartItems}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          onAddToCart={onAddToCart}
        />
      </Route>
      <Route path="/favorites" exact>
        <Favorites items={favorites} onAddToFavorite={onAddToFavorite} />
      </Route>
      {/* <div className="content p-40">
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
      </div> */}
    </div>
  );
}

export default App;
