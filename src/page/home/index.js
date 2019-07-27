import React, { Component } from 'react';
import List from './components/List'
import Recommend from './components/Recommend'
import Advertisement from './components/Advertisement'
import Writter from './components/Writter'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight
} from './styled'
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt='' className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4318/60781ff21df1d1b03f5f8459e4a1983c009175a5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recommend/>
                    <Advertisement/>
                    <Writter/>
                </HomeRight>      
            </HomeWrapper>
        );
    }
}

export default Home;