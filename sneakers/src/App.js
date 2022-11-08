import React from 'react';
import Card from './components/Card';
import Drawer from './components/Draver';
import Header from './components/Header';

const arr = [
  { title: 'Nike Blazer for men', price: '500$', imgUrl: 'img/sneakers/1.jpg' },
  { title: 'Nike Blazer for men', price: '600$', imgUrl: 'img/sneakers/2.jpg' },
  { title: 'Nike Blazer for men', price: '700$', imgUrl: 'img/sneakers/3.jpg' },
  { title: 'Nike Blazer for men', price: '800$', imgUrl: 'img/sneakers/4.jpg' },
  { title: 'Nike Blazer for men', price: '900$', imgUrl: 'img/sneakers/5.jpg' },
];
function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search"></img>
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="d-flex">
          {arr.map((obj) => (
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
