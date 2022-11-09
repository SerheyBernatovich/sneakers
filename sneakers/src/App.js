import React from 'react';
import Card from './components/Card';
import Drawer from './components/Draver';
import Header from './components/Header';

function App() {
  const [items, setItem] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch('https://636b93f17f47ef51e134692f.mockapi.io/item')
      .then((res) => {
        return res.json();
      })
      .then((json) => setItem(json));
  }, []);

  return (
    <div className="wrapper clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search"></img>
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onFavorite={() => console.log('add to...')}
              onPlus={() => console.log('on Click Plus')}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
