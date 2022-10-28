function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="d-flex justify-between mb-30 ">
            Cart
            <img className="cu-p" src="img/btn-remove.svg" alt="Remove" />
          </h2>
          <div className="items">
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Nike Blazer for men</p>
                <b>500 $</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: 'url(img/sneakers/1.jpg)' }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Nike Blazer for men</p>
                <b>500 $</b>
              </div>
              <img
                className="removeBtn"
                src="img/btn-remove.svg"
                alt="Remove"
              />
            </div>
            <div className="cartTotalBlock">
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
            </div>
          </div>
        </div>
      </div>

      <header className="d-flex justify-between align-center p-40">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logotype" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">shop of the best sneakers</p>
          </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img width={18} height={18} src="img/cart.svg" alt="cart" />
            <span>1205 $</span>
          </li>
          <li>
            <img width={18} height={18} src="img/user.svg" alt="user" />
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="Search"></img>
            <input placeholder="Search..."></input>
          </div>
        </div>

        <div className="d-flex">
          <div className="card">
            <div className="favorite">
              <img src="img/unliked.svg" alt="Unliked" />
            </div>
            <img
              height={112}
              width={133}
              src="img/sneakers/1.jpg"
              alt="sneaker"
            />
            <h5>Nike Blazer for men</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column  ">
                <span>price</span>
                <b>500 $</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              height={112}
              width={133}
              src="img/sneakers/2.jpg"
              alt="sneaker"
            />
            <h5>Nike Blazer for men</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column  ">
                <span>price</span>
                <b>600 $</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              height={112}
              width={133}
              src="img/sneakers/3.jpg"
              alt="sneaker"
            />
            <h5>Nike Blazer for men</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column  ">
                <span>price</span>
                <b>700 $</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              height={112}
              width={133}
              src="img/sneakers/4.jpg"
              alt="sneaker"
            />
            <h5>Nike Blazer for men</h5>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column  ">
                <span>price</span>
                <b>800 $</b>
              </div>
              <button className="button">
                <img height={11} width={11} src="img/plus.svg" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
