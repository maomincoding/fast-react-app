/* eslint-disable import/no-cycle */
import { fromJS } from 'immutable';
import { actionsTypes } from './index';

const defaultState = fromJS({
  name: 'FastReactApp',
  datalist: [],
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionsTypes.DATA_LIST:
      return state.set('datalist', action.data);
    default:
      return state;
  }
};
