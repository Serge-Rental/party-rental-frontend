import './App.css'
import NavigationBar from './components/NavigationBar'
import Home from './components/Home'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Contact from './components/Contact'
import Cart from './components/Cart'
import SingleProduct from './components/SingleProduct'
import { useState, useEffect } from 'react'
import PageNotFound from './components/PageNotFound'
import OrderConfirmation from './components/OrderConfirmation'

function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cart")) ?? [];
    } catch {
      console.error("The cart could not be parsed in JSON.")
      return [];
    }
  })
  useEffect(() => localStorage.setItem("cart", JSON.stringify(cart)), [cart]);

  function addToCart(id){
    setCart((items) => {
      const itemInCart = items.find(item => item.id === id);
      //if item exist in cart increase the quantity
      if (itemInCart) {
        return items.map((item) => 
          item.id === id ? { ...item, quantity: item.quantity + 1}:item
        );
      }else{
        return [...items, {id, quantity: 1}]
      }
    })
  }

  function updateQuantity(id, quantity){
    setCart((items) => {
      //update item in cart
      return items.map((item) => (
        item.id === id ? { ...item, quantity} : item
      ));
    });
  }
  function deleteItem(id){
    //remove item from cart
    setCart((items) => {
      return items.filter((item) => item.id !== id);
    })
  }
  function emptyCart(){
    setCart([]);
  }

  return (
    <div className="App">
        <NavigationBar cart={cart} />
        <main>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pageError' element={<PageNotFound/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/products/:id' element={<SingleProduct addToCart={addToCart}/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/cart' element={<Cart cart={cart} updateQuantity={updateQuantity} deleteItem={deleteItem}/>}/>
            <Route path='/checkout' element={<Checkout cart={cart} />}/>
            <Route path='/order-confirmed' element={<OrderConfirmation cart={cart} />}/>
          </Routes>
        </main>
        
        <Footer />
    </div>
  )
}

export default App
