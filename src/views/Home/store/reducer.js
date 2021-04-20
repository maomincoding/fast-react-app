/* eslint-disable import/no-cycle */
import { fromJS } from 'immutable';
import { actionsTypes } from './index';

let i = 0;

const defaultState = fromJS({
  name: 'FastReactApp',
  list: [],
  datalist: [],
  flag: false,
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.CLICK:
      i += 1;
      return state.set('list', state.get('list').push(i));
    case actionsTypes.DATA_LIST:
      return state.set('datalist', action.data);
    case actionsTypes.ANIMAT:
      return state.set('flag', true);
    default:
      return state;
  }
};
