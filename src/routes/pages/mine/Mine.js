
import React from 'react';
import { connect } from 'dva';
import { List, InputItem, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

class Mine extends React.Component{

  render(){
    const { getFieldProps } = this.props.form;
    return(
      <div>
        <List renderHeader={() => 'Custom title（text / image / empty)'}>
          <InputItem
            {...getFieldProps('input3')}
            placeholder="no label"
          />
          <InputItem
            {...getFieldProps('inputtitle2')}
            placeholder="title can be icon，image or text"
          >
            <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
          </InputItem>
        </List>
      </div>
    )
  }
}

export default connect()(createForm()(Mine))