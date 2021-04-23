import React, { useState } from 'react';
import './App.css';
import Home from './component/Home-Menu/home-menu';
import Activity from './component/Activity/activity';
import Wallet from './component/Wallet/wallet';
import Market from './component/Market/market';
import Earn from './component/Earn/earn';
import Header from './component/Header/header';
import Footer from './component/Footer/footer';
import { connect } from 'react-redux';

function App( {state}) {

  return (  
    <div className="App">
      <Header/>
      {
        (state == 'home') ? <Home/> : ((state == 'activity') ? <Activity/> : ((state == 'market') ? <Market/> : ((state == 'wallet') ? <Wallet/> : (state == 'earn') ? <Earn/> : '')))
      }
       
      <Footer/>
    </div>
  );
}

const mapStateToProps = (render) => {
  return{
    state : render.state
  }
}
export default connect(mapStateToProps) (App);
