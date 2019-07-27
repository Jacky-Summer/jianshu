import * as constants from './constants';
import axios from 'axios'
import { fromJS } from 'immutable';

const changeList = (data) => ({
    type:constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage:Math.ceil(data.length / 10)
})


export const searchFocusAction = () => ({
	type:constants.SEARCH_FOCUS
})
export const searchBlurAction = () => ({
	type:constants.SEARCH_BLUR
})
export const mouseEnterAction = () => ({
	type:constants.MOUSE_ENTER
})
export const mouseLeaveAction = () => ({
	type:constants.MOUSE_LEAVE
})
export const changePageAction = (page) => ({
	type:constants.CHANGE_PAGE,
	page
})
export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
			dispatch(changeList(data.data));
		})
	}
};