import React, { useEffect} from 'react';
import {Tit} from './style.js';
import { connect } from 'react-redux';
import { actionsCreator } from './store/index.js';
import { List } from 'antd';

const mapStateToProps = (state) => {
  return {
    name: state.getIn(['home', 'name']),
    list: state.getIn(['home', 'list']),
    datalist: state.getIn(['home', 'datalist']),
    flag: state.getIn(['home', 'flag'])
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handerClick() {
      dispatch(actionsCreator.click());
    },
    clickAnimation() {
      dispatch(actionsCreator.animat());
    },
    getdata() {
      dispatch(actionsCreator.getList())
    }
  }
};

const Home =(props)=>{
const { name, datalist, getdata } = props;
const newList = datalist.toJS();
  useEffect(() => {
    document.title = 'Home';
    getdata();
  }, [])
  return (
      <div>
      <Tit>{name}</Tit>
      <List
        bordered
        dataSource={newList}
        renderItem={item => (
          <List.Item>
            {item.username}
          </List.Item>
        )}
      />
      </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

