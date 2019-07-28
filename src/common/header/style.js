import styled from 'styled-components'
import logoPic from '../../static/logo.png'
export const HeaderWrapper = styled.div`
    position:relative;
    height:58px;
    border-bottom:1px solid #f0f0f0;
`
export const Logo = styled.div`
    position:absolute;
    top:0;
    left:40px;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain;
`
export const Nav = styled.div`
    width:960px;
    height:100%;
    margin:0 auto;
`;
export const NavItem = styled.a`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    margin-right:10px;
    color: #333;
    &.left{
        float:left;
    }
    &.active{
        color:#ea6f5a;
    }
    &.right{
        float:right;
    }
    &.login{
        color: #969696;
    }
    .iconfont{
        font-size: 20px;
        padding-right: 4px;
    }
`
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    .iconfont{
		position:absolute;
		right:5px;
		bottom:5px;
		width:30px;
		line-height:30px;
		border-radius:15px;
        text-align:center;
        &.zoom{
            background: #777;
			color: #fff;
        }
    }
`
export const NavSearch = styled.input.attrs({
    placeholder:'搜索'
})`
    width: 230px;
    height: 38px;
    padding: 0 30px 0 22px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 280px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 230px;
	}
`
export const Addition = styled.div`
    position: absolute;
    right: 50px;
    top: 0;
    height: 56px;
`   
export const Button = styled.div`
    float: right;
    width: 82px;
    height: 38px;
    line-height: 39px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    text-align:center;
    
    &.writing{
        background-color: #ea6f5a;
        width:100px;
        color:#fff;
    }
    &.reg{
        color: #ea6f5a;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    margin-left: 204px;
    top: 56px;
    width: 240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`
export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin {
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`
export const SearchInfoList = styled.div`
    overflow: hidden;
`
export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    line-height: 20px;
    padding: 0 5px;
    margin-right: 10px;
    margin-bottom: 15px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
`