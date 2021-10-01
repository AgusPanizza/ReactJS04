//import logo from './logo.svg';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './App.css';


function App() {

  return (
      <>
      <NavBar logo="RAMBLA"/>     
      <ItemListContainer greeting= "Bienvenidxs" contenido= "Catalogo"/>
      </>
  );
}

export default App;

