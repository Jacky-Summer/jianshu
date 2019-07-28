import React, { Component } from 'react';
import List from './components/List'
import Recommend from './components/Recommend'
import Advertisement from './components/Advertisement'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop
} from './styled'
class Home extends Component {
    backToTop(){
        window.scrollTo(0,0)
    }
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
                    <Writer/>
                </HomeRight> 
                {this.props.showScroll ? <BackTop onClick={this.backToTop}>回到顶部</BackTop> : null}    
            </HomeWrapper>
        );
    }
    componentDidMount(){
        this.bindEvents()
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }
}
const mapState = (state) => {
    return {
        showScroll:state.getIn(['home','showScroll'])
    }
}
const mapDispatch = (dispatch) => {
    return { 
        changeScrollTopShow(){
            if(document.documentElement.scrollTop > 150){
                dispatch(actionCreators.ToggleScrollShow(true))
            }else{
                dispatch(actionCreators.ToggleScrollShow(false))
            }
        }
    }
}
export default connect(mapState,mapDispatch)(Home);