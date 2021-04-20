/* eslint-disable import/no-cycle */
import { fromJS } from 'immutable';
import { homeData } from '../../../request/api';
import { actionsTypes } from './index';

const dataList = (data) => ({
  type: actionsTypes.DATA_LIST,
  data: fromJS(data),
});

// eslint-disable-next-line import/prefer-default-export
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
