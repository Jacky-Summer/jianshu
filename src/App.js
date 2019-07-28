import React, { Component } from 'react';
import {GlobalStyled} from './style.js';
import {GlobalStyledIcon} from './static/iconfont/iconfont'
import Header from './common/header'
import Home from './page/home'
import Detail from './page/detail'
import Login from './page/login'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter,Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <div>   
            <BrowserRouter>
              <Header/>
              <Route path='/' exact component={Home}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/login' exact component={Login}></Route>
            </BrowserRouter>
            <GlobalStyledIcon/>
            <GlobalStyled/>
          </div>
      </Provider>
    );
  }
}

export default App;