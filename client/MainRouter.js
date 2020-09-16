import React from 'react';
import { Route, Switch } from 'react-router-dom';

//components
import MainAppBar from './core/AppBar';
import CompanyTitle from './core/CompanyTitle';
import HomePage from './components/Pages/Home-Page';
import CategoryPage from './components/Pages/Category-Page';
import AllProductsPage from './components/Pages/All-Products-Page';
import ProductDetailsPage from './components/Pages/Product-Details-Page';
import PrivateRoute from './core/PrivateRoute';
import AdminPage from './components/Pages/Admin-Page';
import Contact from './components/Page-Components/Contact';
import SignIn from './components/Page-Components/SignIn';

export default function MainRouter() {
  return (
    <>
      <MainAppBar/>
      <CompanyTitle/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/products/list/all" component={AllProductsPage}/>
        <Route path="/products/by/:category" component={CategoryPage}/>
        <Route path="/products/product/:productId/" component={ProductDetailsPage}/>
        <PrivateRoute exact path='/admin' component={AdminPage}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/signin" component={SignIn}/>
      </Switch>
      <Footer/>
    </>
  );
};