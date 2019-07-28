import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { ListInfo,ListItem,LoadMore } from '../styled'
import * as actionCreators from '../store/actionCreators'
import { Link } from 'react-router-dom'
class List extends PureComponent {
    render() {
        const { articleList,getMoreList,page } = this.props
        return (
           <div>
            {
                articleList.map((item,index)=>{
                    return (
                        <Link key={index} to='/detail'>
                            <ListItem key={index}>
                                <img alt='' className='pic' src={item.get('imgUrl')} />
                                <ListInfo>
                                    <h3 className="title">{item.get('title')}</h3>
                                    <p className="desc">{item.get('desc')}</p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    )
                })
            }
            <LoadMore onClick={() => getMoreList(page)}>阅读更多</LoadMore>
           </div>
        );
    }
}
const mapState = (state) => {
    return {
        articleList:state.getIn(['home','articleList']),
        page:state.getIn(['home','articlePage'])
    }
}
const mapDispatch = (dispatch) => {
    return {
        getMoreList(page){
            dispatch(actionCreators.addArticleList(page))
        }
    }
}
export default connect(mapState,mapDispatch)(List);