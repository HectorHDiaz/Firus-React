import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css';

import { CartContextProvider } from './context/CartContext';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartContainer from './components/Cart/Cart';
import Navbar from './components/NavBar/Navbar';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
          <BrowserRouter>
            <Navbar/>
            <Routes>
              <Route exact path="/" element={<ItemListContainer/>}/>
              <Route exact path="/cart" element={<CartContainer/>}/>
              <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
              <Route exact path="/item/:mascotaId" element= {<ItemDetailContainer/>}/>
            </Routes>
          </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
