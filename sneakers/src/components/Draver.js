function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30 ">
          Cart
          <img
            onClick={props.onClose}
            className="cu-p"
            src="img/btn-remove.svg"
            alt="Remove"
          />
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
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
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
            <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
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
  );
}
export default Drawer;
