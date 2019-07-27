import { fromJS } from 'immutable'
const defaultState = fromJS({
    recommendList:[]
})
export default (state = defaultState,action) => {
    return state;
}