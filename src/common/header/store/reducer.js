import { fromJS } from 'immutable';
import * as constants from './constants'
const defalutState = fromJS({
    headerList:[]
})
export default (state = defalutState,action) => {
    if(action.type === constants.CHANGE_LIST){
        return state.set('headerList',action.data)
    }
    return state;
}