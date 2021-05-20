import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';
import { Tit, Txt } from './style';
import { actionsCreator } from './store/index';

const mapStateToProps = (state) => ({
  name: state.getIn(['home', 'name']),
  datalist: state.getIn(['home', 'datalist']),
});

const mapDispatchToProps = (dispatch) => ({
  getdata() {
    dispatch(actionsCreator.getList());
  },
});
const Home = (props) => {
  // eslint-disable-next-line react/prop-types
  const { name, datalist, getdata } = props;
  // eslint-disable-next-line react/prop-types
  const newList = datalist.toJS();
  useEffect(() => {
    document.title = 'Home';
    getdata();
  }, [getdata, name]);
  return (
    <div>
      <Tit>{name}</Tit>
      <Txt>
        <List
          bordered
          dataSource={newList}
          renderItem={(item) => <List.Item>{item.username}</List.Item>}
        />
      </Txt>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
