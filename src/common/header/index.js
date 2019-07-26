import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchInfoList,
    SearchInfoSwitch,
    SearchInfoTitle,
    SearchInfoItem
} from './style'
class Header extends Component {
    render() {
        const { handleInputFocus,list } = this.props;
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
                        <NavSearch
                            onFocus={handleInputFocus}
                        ></NavSearch>
                        <span className="iconfont">&#xe614;</span>
                    </SearchWrapper>
                    <SearchInfo>
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch>换一换</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                         {
                             list.map((item)=>{
                                 return <SearchInfoItem key={item}>{item}</SearchInfoItem>
                             })
                         }        
                        </SearchInfoList>
                    </SearchInfo>
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
const mapState = (state) => {
    return {
        list:state.header.get('headerList')
    }
}
const mapDispatch = (dispatch) => {
    return {
        handleInputFocus(){
            dispatch(actionCreators.getList())
        }
    }
}
export default connect(mapState,mapDispatch)(Header);