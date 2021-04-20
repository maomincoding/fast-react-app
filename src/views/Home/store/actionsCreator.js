/* eslint-disable import/no-cycle */
import { fromJS } from 'immutable';
import { homeData } from '../../../request/api';
import { actionsTypes } from './index';

export const click = () => ({
  type: actionsTypes.CLICK,
});

export const animat = () => ({
  type: actionsTypes.ANIMAT,
});

const dataList = (data) => ({
  type: actionsTypes.DATA_LIST,
  data: fromJS(data),
});

export const getList = () => (dispatch) => {
  homeData()
    .then((res) => {
      const data = res;
      const action = dataList(data);
      dispatch(action);
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.log(err);
    });
};
