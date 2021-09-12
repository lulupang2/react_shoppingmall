import { Route, Switch } from 'react-router';
import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import Products from './components/products/products';
function App() {
  return (
    <div className="App">
      <div className="bg">
        <div className="container">        
          <Menu />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
