import React, { Component } from 'react';
import {GlobalStyled} from './style.js';
import {GlobalStyledIcon} from './static/iconfont/iconfont'
import Header from './common/header'
import { Provider } from 'react-redux'
import store from './store'
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Header/>
          <GlobalStyledIcon/>
          <GlobalStyled/>
      </Provider>
    );
  }
}

export default App;