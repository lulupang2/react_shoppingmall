import React from 'react';
import './App.css';
import {  BrowserRouter as Router,  Switch,  Route,} from 'react-router-dom';
import Menu from './components/menu';
import Users from './components/users/userslist';
import Products from './components/products/products';
function App() {
  return (
    <Router>
      <div className="App">
        <Menu />


        {/* <Switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/users">
            <Users />

          </Route>
          <Route path="/join">

          </Route>
          <Route path="/">

          </Route>
        </Switch>
      </div>
    </Router>
  );
}



export default App;
