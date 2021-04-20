import { actionsTypes } from './index.js';
import { fromJS } from 'immutable';
let i = 0;

let defaultState = fromJS({
    name: 'FastReactApp',
    list: [],
    datalist: [],
    flag:false
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsTypes.CLICK:
            i++;
            return state.set('list', state.get('list').push(i))
        case actionsTypes.DATA_LIST:
            return state.set('datalist', action.data)
        case actionsTypes.ANIMAT:
            return state.set('flag', true)
        default:
            return state;
    }
};