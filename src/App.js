import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './components/Cart/CartContainer';

import {NotificationContextProvider} from './context/NotificationContext'
import { CartContextProvider } from './context/CartContext'

function App() {

  return (
    <div className="App">
      <CartContextProvider>
        <NotificationContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>}/>
              <Route exact path="/cart" element={<CartContainer/>}/>
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
