import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/cart/Cart';
import Notification from './components/Notification/Notification';

import {NotificationContextProvider} from './components/context/NotificationContext'
import CartContext, { CartContextProvider } from './components/context/CartContext';


function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <NotificationContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Notification/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>}/>
              <Route exact path="/cart" element={<Cart/>}/>
              <Route exact path="/category/:estadoId" element={<ItemListContainer/>}/>
              <Route exact path="/item/:mascotaId" element= {<ItemDetailContainer/>}/>
            </Routes>
          </BrowserRouter>
        </NotificationContextProvider>
      </CartContextProvider>
    </div>
  );
}

export default App;
