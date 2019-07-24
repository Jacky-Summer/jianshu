import React, { Component } from 'react';
import {GlobalStyled} from './style.js';
import {GlobalStyledIcon} from './static/iconfont/iconfont'
import Header from './common/header'
class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <GlobalStyledIcon/>
          <GlobalStyled/>
      </div>
    );
  }
}

export default App;