import React from 'react'
import "./home.css"
function Home() {
  return (
    <div className="homeContainer">
      <div className="homeContainerTitles">
        <div className="Delivery">
          <h4>Delivery</h4>
          <p>TELL US WHERE YOU ARE</p>
          <p>
            We need your address to show you the menu and offers from your local
            Hut.
          </p>
          <div className='addressWrapper'>
            <input type="text" placeholder="Address"></input>
            <button>Order Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home