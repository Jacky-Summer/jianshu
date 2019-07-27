import React, { Component } from 'react';
import {GlobalStyled} from './style.js';
import {GlobalStyledIcon} from './static/iconfont/iconfont'
import Header from './common/header'
import Home from './page/home'
import Detail from './page/detail'
import { Provider } from 'react-redux'
import store from './store'
import { BrowserRouter,Route } from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header/>
          <BrowserRouter>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </BrowserRouter>
          <GlobalStyledIcon/>
          <GlobalStyled/>
      </Provider>
    );
  }
}

export default App;