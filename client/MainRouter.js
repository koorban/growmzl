import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import MainAppBar from './core/AppBar';
import Footer from './core/Footer';
import CompanyTitle from './core/CompanyTitle';
import Home from './core/Home';
import SignUp from './components/Signup';
import Upload from './components/Upload';
import Products from './components/Products';
import AllProducts from './components/AllProducts';
import ProductInfo from './components/ProductInfo';
import Contact from './components/Contact';
import About from './components/About';
import SignIn from './components/SignIn';

export default function MainRouter(){
    return (<div>
      <MainAppBar/>
      <CompanyTitle/>
      <Footer/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route exact path="/upload" component={Upload}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/products/list/all" component={AllProducts}/>
        <Route path="/products/product/:productId/" component={ProductInfo}/>
        <Route path="/products/by/:category" component={Products}/>
      </Switch>
    </div>
  );
};