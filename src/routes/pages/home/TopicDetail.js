
import React from 'react';
import { connect } from 'dva';
import { NavBar } from 'antd-mobile';

class TopicDetail extends React.Component{
  componentDidMount(){
    console.log(this.props)
    // console.log(this.props.history.location.query.topicId)
  }

  render(){

    return (
      <div>
        <NavBar
          mode="dark"
        >详情</NavBar>
        detail
      </div>
    )
  }
}
function mapStateToProps(state){
  // console.log('state',state)
  return {
    topicList:state.topic.topicList
  };
}

export default connect(mapStateToProps)(TopicDetail);