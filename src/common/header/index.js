import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import * as actionCreators from './store/actionCreators'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import { actionCreators as logoutCreators } from '../../page/login/store'
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
class Header extends PureComponent {

    getListArea(){
        const { focued, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
		const newList = list.toJS();
		const pageList = [];
		if (newList.length) {
			for (let i = (page - 1) * 10; i < page * 10; i++) {
				pageList.push(
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				)
			}
		}

        
        if(focued || mouseIn){
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page,totalPage,this.spinIcon)}>
                            <span className="iconfont spin" ref={(icon)=> this.spinIcon = icon}>&#xe851;</span>
                            换一换
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}    
                    </SearchInfoList>
                </SearchInfo>
            )
        }else{
            return null;
        }
    }
    render() {
        const { handleInputFocus,focued,handleInputBlur,list,loginStatus,logout } = this.props;
        return (
            <HeaderWrapper>
                <Link to='/'>
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">
                        <span className="iconfont">&#xe61f;</span>
                        首页
                    </NavItem>
                    <NavItem className="left">
                        <span className="iconfont">&#xe666;</span>
                        下载App
                    </NavItem>
                    {
                        loginStatus ? 
                        <NavItem onClick={logout} className="right login">退出</NavItem>  :
                        <Link to='/login'><NavItem className="right login">登录</NavItem></Link>
                    }
                   
                    <NavItem className="right"><span className="iconfont">&#xe636;</span></NavItem>
                    <NavItem className="right"><span className="iconfont">&#xe600;</span></NavItem>
                    <SearchWrapper>
                        <CSSTransition
                            classNames="slide"
                            in={focued}
                            timeout={2000}
                        >
                            <NavSearch
                                className={focued ? 'focued' :''}
                                onFocus={() => handleInputFocus(list)}
                                onBlur={handleInputBlur}
                            ></NavSearch>
                        </CSSTransition>
                        <span className={focued ? 'iconfont zoom': 'iconfont'}>&#xe614;</span>
                    </SearchWrapper>
                    {this.getListArea()}
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
        list:state.getIn(['header','list']),
        focued:state.getIn(['header','focued']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),
        loginStatus:state.getIn(['login','loginStatus'])
    }
}
const mapDispatch = (dispatch) => {
    return {
        handleInputFocus(list){
            (list.size === 0) && dispatch(actionCreators.getList());
            dispatch(actionCreators.searchFocusAction())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlurAction())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnterAction())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeaveAction())
        },
        handleChangePage(page,totalPage,spin){
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			if (originAngle) {
				originAngle = parseInt(originAngle, 10);
			}else {
				originAngle = 0;
			}
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
            if(page < totalPage){
                dispatch(actionCreators.changePageAction(page + 1))
            }else{
                dispatch(actionCreators.changePageAction(1))
            }   
        },
        logout(){
            dispatch(logoutCreators.logout())
        }
    }
}
export default connect(mapState,mapDispatch)(Header);