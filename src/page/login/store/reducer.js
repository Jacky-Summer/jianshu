import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
	loginStatus:false
});

export default (state = defaultState, action) => {
	switch(action.type){
		case constants.CHANGE_LOGIN:
			return state.set('loginStatus',true)
		case constants.LOGOUT:
			return state.set('loginStatus',false)
		default:
			return state;		
	}
}