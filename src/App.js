//import logo from './logo.svg';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
      <>
      <NavBar logo="RAMBLA"/>     
      <ItemListContainer/>
      </>
  );
}

export default App;

