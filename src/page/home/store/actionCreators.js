import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable';

export const getMoreList= (data,nextPage) => ({
    type:constants.ADD_ACTICLE_LIST,
    data:fromJS(data),
    nextPage
})

export const addArticleList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page='+ page).then((res)=>{
            const data = res.data.data
            dispatch(getMoreList(data,page+1))
            
        })   
    }
}
export const ToggleScrollShow = (isShow) => ({
    type:constants.CHANGE_SCROLL_SHOW,
    isShow
})