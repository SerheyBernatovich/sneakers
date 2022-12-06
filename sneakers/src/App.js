import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import AppContext from './context';
import Drawer from './components/Drawer';
import Header from './components/Header';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Orders from './pages/Orders';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    // fetch('https://636b93f17f47ef51e134692f.mockapi.io/item')
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setItems(json));
    async function fetchData() {
      setIsLoading(true);
      const cartResponse = await axios.get(
        'https://636b93f17f47ef51e134692f.mockapi.io/Cart'
      );

      const favoritesResponse = await axios.get(
        'https://636b93f17f47ef51e134692f.mockapi.io/favorites'
      );
      const itemResponse = await axios.get(
        'https://636b93f17f47ef51e134692f.mockapi.io/item'
      );
      setIsLoading(false);

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
    try {
      if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
        axios.delete(
          `https://636b93f17f47ef51e134692f.mockapi.io/favorites/${obj.id}`
        );
        setFavorites((prev) =>
          prev.filter((item) => Number(item.id) !== Number(obj.id))
        );
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

  const isItemAdded = (id) =>
    cartItems.some((obj) => Number(obj.id) === Number(id));
  return (
    <AppContext.Provider
      value={{
        setCartOpened,
        onAddToFavorite,
        onAddToCart,
        items,
        cartItems,
        favorites,
        isItemAdded,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {/* {cartOpened && (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        )} */}
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
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
            isLoading={isLoading}
          />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>

        <Route path="/orders">
          <Orders />
        </Route>
      </div>
    </AppContext.Provider>
  );
}

export default App;
