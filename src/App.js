//import logo from './logo.svg';
import { NavBar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
 } from 'react-router-dom'                                   

function App() {

  return (
      <>
      <BrowserRouter>


      <Switch>
        <Route exact path="/">
          <div className="fotos">
          <NavBar logo="RAMBLA"/>  
          </div>
        </Route>

        <Route exact path="/nosotros">
        <NavBar logo="RAMBLA"/>  
          <h1>Nosotros</h1>
        </Route>        
        
        <Route exact path="/nuestro café">      
        <NavBar logo="RAMBLA"/>  
          <h1>Nuestro Café</h1>
        </Route>

        <Route exact path="/patisserie">
        <NavBar logo="RAMBLA"/>  
          <h1>Patisserie</h1>
        </Route>

        <Route exact path="/e-Shop/:categoryId">
        <NavBar logo="RAMBLA"/>  
        <ItemListContainer/>       
        </Route>

        <Route exact path="/detail/:itemId">
        <NavBar logo="RAMBLA"/>  
        <ItemDetailContainer/>       
        </Route>

        <Route exact path="/contacto">
        <NavBar logo="RAMBLA"/>  
          <h1>Contacto</h1>
        </Route>
        
        <Route exact path="/cart">
        <NavBar logo="RAMBLA"/>  
        <h1>Carrito</h1>
        </Route>

        <Route path="*">
        <Redirect to= "/"></Redirect>
        </Route>
      </Switch>

      </BrowserRouter>
      </>
  );
}

export default App;

