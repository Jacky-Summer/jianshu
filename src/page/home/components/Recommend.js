import React, { PureComponent } from 'react';
import { RecommendWrapper,RecommendItem } from '../styled'
import { connect } from 'react-redux'
class Recommend extends PureComponent {
    render() {
        const { list } = this.props;
        return (
            <RecommendWrapper>
            {
                list.map((item)=>{
                    return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}></RecommendItem>
                })
            }
            </RecommendWrapper>
        );
    }
}
const mapState = (state) => {
    return {
        list:state.getIn(['home','recommendList'])
    }
}

export default connect(mapState,null)(Recommend);