import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import {
    WriterWrapper,
    WriterTitle,
    WriterSwitch,
    WriterItem,
    WriterName,
    WriterDesc,
    WriterFocus,
    WriterInfo
} from '../styled'
class Writer extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <WriterWrapper>
                <WriterTitle>推荐作者</WriterTitle>
                <WriterSwitch>
                    换一批
                    <span className="iconfont spin" ref={(icon)=> this.spinIcon = icon}>&#xe851;</span>
                </WriterSwitch>
                {
                    list.map((item)=>{
                        return (
                            <WriterItem key={item.get('id')}>
                                <WriterInfo>
                                    <img alt='' className="avatar-img" src={item.get('imgUrl')} />
                                    <WriterName>{item.get('name')}</WriterName>
                                    <WriterDesc>写了{item.get('words')}k字&nbsp;{item.get('star')}k喜欢</WriterDesc>
                                </WriterInfo>
                                <WriterFocus>+关注</WriterFocus>
                            </WriterItem>
                        )
                    })
                }
                
            </WriterWrapper>
        );
    }
}
const mapState = (state) => {
    return {
        list:state.getIn(['home','writerList'])
    }
}
export default connect(mapState,null)(Writer);