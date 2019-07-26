import * as constants from './constants';
import axios from 'axios'

const changeList = (data) => ({
    type:constants.CHANGE_LIST,
    data
})

export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
			dispatch(changeList(data.data));
		})
	}
};
    

