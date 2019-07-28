import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from '../login/style';
import * as actionCreators from '../login/store/actionCreators';
class Login extends PureComponent {
    
	render() {
        const { login,loginStatus } = this.props;
        if(loginStatus){
            return (
                <div>写文章页面</div>
            )
        }else{
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder='账号' type='text' ref={(input) => {this.account = input}}/>
                        <Input placeholder='密码' type="password" ref={(input) => {this.password = input}}/>
                        <Button onClick={()=>login(this.account,this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>    
            )
        }
        
        

	}
}

const mapState = (state) => ({
	loginStatus:state.getIn(['login','loginStatus'])
})

const mapDispatch = (dispatch) => ({
	login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value))
    }
})

export default connect(mapState, mapDispatch)(Login);