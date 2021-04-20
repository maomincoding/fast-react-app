// 分模块Reducer
import { combineReducers } from 'redux-immutable';
import { reducer as homeReducer } from '../views/Home/store/index';

const reducer = combineReducers({
  home: homeReducer,
});

export default reducer;
