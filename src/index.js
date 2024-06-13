import React from 'react';
import ReacDOM from 'react-dom/client';
import './index.css';

const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  const pizzaNum = pizzas.length;
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizzaNum > 0 ? (
        <>
          <p>
            Authentic Italian cuasine. {pizzaNum} creative dishes to choose
            from. All form our stone, All organic, All Delicious
          </p>
          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              <Pizza pizzaObjt={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're Still working our Menu, Please come bak </p>
      )}

      {/* <Pizza
        name='Pizza Spinaci'
        ingredients='Tomato, mozarella, spinach, and ricotta cheese'
        price={10}
        photoName='pizzas/spinaci.jpg'
      />
      <Pizza
        name='Focaccia'
        ingredients='Bread with italian olive oil and rosemary'
        price={6}
        photoName='pizzas/Focaccia.jpg'
      /> */}
    </main>
  );
}
function Footer() {
  const hours = new Date().getHours();
  const openHours = 8;
  const closeHours = 22;
  console.log(hours);
  // if (hours < openHours && hours >= closeHours) {
  //   alert('We are Open');
  // } else alert('We are Closed');
  const isOpen = hours >= openHours && hours < closeHours;

  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHours} />
      ) : (
        <p>We are Closed Until {openHours}:00 </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className='order'>
      <p>We are open Until {closeHour}:00 come visit us or order Online.</p>
      <button className='btn'>Order Now</button>
    </div>
  );
}
function Pizza({ pizzaObjt }) {
  // console.log(props);
  // if (pizzaObjt.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObjt.soldOut ? 'sold-out' : ''}`}>
      <img src={pizzaObjt.photoName} alt={pizzaData.name}></img>
      <div>
        <h3>{pizzaObjt.name}</h3>
        <p>{pizzaObjt.ingredients}</p>
        <span>{pizzaObjt.soldOut ? 'SOLD OUT' : pizzaObjt.price}</span>
      </div>
    </li>
  );
}

const root = ReacDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
