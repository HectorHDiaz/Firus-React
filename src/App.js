import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>}/>
          <Route exact path="/category/:estadoId" element={<ItemListContainer/>}/>
          <Route exact path="/item/:mascotaId" element= {<ItemDetailContainer/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
