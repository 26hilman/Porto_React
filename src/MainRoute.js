import React from "react";
import { Route, Switch } from "react-router-dom";

// import App from "./App";
import LoginPage from "./Pages/Login";
import RegisterPage from './Pages/Register'
import HomePage from './Pages/Home';
import HubungiKamiPage from './Pages/HubungiKami';
import ProductDetailPage from './Pages/ProductDetail';
import ProfilePage from './Pages/Profile';
import EditProfilePage from './Pages/EditProfile';
import KirimTestimoniPage from './Pages/KirimTestimoni';

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register" component={RegisterPage}/>
      <Route path="/hubungikami" component={HubungiKamiPage}/>
      <Route path="/product_detail" component={ProductDetailPage}/>
      <Route path="/profile" component={ProfilePage}/>
      <Route path="/edit_profile" component={EditProfilePage}/>
      <Route path="/kirim_testimoni" component={KirimTestimoniPage}/>
    </Switch>
  );
};

export default MainRoute;