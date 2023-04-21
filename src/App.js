import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { ItemProvider } from "./context";
import { EventlistProvider } from "./event_context";

import Main from './main';

import Deal from './components/deal';
import Best from './components/best';
import New from './components/new';
import Brand from './components/brand';
import Tv from './components/tv';
import Coupon from './components/coupon';
import Review from './components/review';
import Event from './components/event';
import Header from './header';
import Customer from './components/customer';
import Login from './components/login';






function App() {
  return (
    <>
      <ItemProvider>
        <EventlistProvider>
          <Header />
          <div className='sub'>
            <Route path='/' exact={true} component={Main} />
            <Route path='/components/deal' component={Deal} />
            <Route path='/components/best' component={Best} />
            <Route path='/components/new' component={New} />
            <Route path='/components/brand' component={Brand} />
            <Route path='/components/tv' component={Tv} />
            <Route path='/components/coupon' component={Coupon} />
            <Route path='/components/review' component={Review} />
            <Route path='/components/event' component={Event} />
            <Route path='/components/customer' component={Customer} />
            <Route path='/components/login' component={Login} />
          </div>
        </EventlistProvider>
      </ItemProvider>
    </>
  );
}

export default App;
