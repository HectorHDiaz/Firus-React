import './App.css';
import Navbar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <ItemListContainer/>
      <ItemDetailContainer/>
    </div>
  );
}

export default App;
