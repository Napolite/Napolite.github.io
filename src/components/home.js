/* eslint-disable jsx-a11y/alt-text */
import "../App.css";
import logo from "../assets/images/logo.png";
import cart from "../assets/images/Vector.png";
import belchev from "../assets/images/dimitar-belchev-fRBpWLAcWIY-unsplash 2.png";
import moran from "../assets/images/edgar-moran-a9YsSySonUc-unsplash 1.png";
import socialcut from "../assets/images/s-o-c-i-a-l-c-u-t-OjnmCKmzr3A-unsplash 1.png";
function Home() {
  return (
    <div className="root">
      <div className="header-class">
        <div>
          <img src={logo} className="logo" />
          <p className="logo-text">rtsy</p>
        </div>
        <div className="menu">
          <div>Home</div>
          <div>About</div>
          <div>Gallery</div>
          <div>Contact us</div>
          <div className="shop-button-div">
            <p>Shop</p>
            <img src={cart} className="cart" />
          </div>
        </div>
      </div>
      <div className="body">
        <div className="intro">
          <div className="expressionOf">
            The Expression <font>Of</font>
          </div>
          <div className="humanAbility">HUMAN ABILITY</div>
          <div className="intro-text">
            A premium online art marketplace dedicated to giving artists the
            platform for their work, and collectors the ability to find and buy
            artworks - from one painting to an entire collection.
          </div>
          <div className="shop-button-body">
            <p>Shop</p>
            <img src={cart} className="cart" />
          </div>
        </div>
        <div className="artworks">
          <div className="socialcut">
            <img src={socialcut} />
          </div>
          <div className="right-art">
            <img src={belchev} className="belchev" />
            <img src={moran} className="moran" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
