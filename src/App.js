import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css'
import WorkPage from './components/Pages/WorkPage';
import CustomNavbar from './components/Layout/Header/CustomNavbar';
import ProductsPage from './components/Pages/ProductsPage';
import AccountingPage from './components/Pages/AccountingPage';


const App = () => (
  <Router>
    <div>
      <CustomNavbar />
      <Route exact path="/" component={WorkPage} />
      <Route exact path="/products" component={ProductsPage} />
      <Route exact path="/accounting" component={AccountingPage} />      
    </div>
  </Router>
)

export default App;
