import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button
} from './style'
class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">
                        <span className="iconfont">&#xe61f;</span>
                        首页
                    </NavItem>
                    <NavItem className="left">
                        <span className="iconfont">&#xe666;</span>
                        下载App
                    </NavItem>
                    <NavItem className="right login">登录</NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe600;</span></NavItem>
                    <SearchWrapper>
                        <NavSearch></NavSearch>
                        <span className="iconfont">&#xe614;</span>
                    </SearchWrapper>
                </Nav>
                <Addition>
                    <Button className="writing">
                        <span className="iconfont">&#xe615;</span>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                    
                </Addition>
            </HeaderWrapper>
        );
    }
}

export default Header;