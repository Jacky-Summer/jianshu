import * as constants from './constants'
import { fromJS } from 'immutable';
const defalutState = fromJS({
    list:[],
    focued:false,
    page:1,
    totalPage:1,
    mouseIn:false
})
export default (state = defalutState,action) => {
    if(action.type === constants.CHANGE_LIST){
        return state.merge({
            list:action.data,
            totalPage:action.totalPage
        })
    }
    if(action.type === constants.SEARCH_FOCUS){
        return state.set('focued',true)
    }
    if(action.type === constants.SEARCH_BLUR){
        return state.set('focued',false)
    }
    if(action.type === constants.MOUSE_ENTER){
        return state.set('mouseIn',true)
    }
    if(action.type === constants.MOUSE_LEAVE){
        return state.set('mouseIn',false)
    }
    if(action.type === constants.CHANGE_PAGE){
        return state.set('page',action.page)
    }
    return state;
}