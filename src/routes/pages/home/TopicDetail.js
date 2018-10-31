
import React from 'react';
import { connect } from 'dva';
import { getRoutes } from "../../../utils/params";

import { NavBar, Card, WhiteSpace } from 'antd-mobile';

class TopicDetail extends React.Component{
  componentDidMount(){
    this.topicDetail();
  }
  topicDetail(){
    var data = {
      id:getRoutes().topicId
    }
    this.props.dispatch({
      type:'topic/topicDetail',
      payload:data,
    })
  }

  render(){
    const { topicDetail } = this.props;
    return (
      <div>
        <NavBar
          mode="dark"
        >详情</NavBar>
        <Card full>
          <Card.Header
            title={topicDetail.title}
            // thumb={topicDetail.author && topicDetail.author.avatar_url}
            // extra={<span>this is extra</span>}
          />
          <Card.Footer content={topicDetail.author && topicDetail.author.loginname} extra={<span>{topicDetail.create_at}</span>} />
        </Card>
        <Card full>
          <Card.Body>
            <div dangerouslySetInnerHTML = {{ __html:topicDetail.content }}></div>
          </Card.Body>
        </Card>
      </div>
    )
  }
}
function mapStateToProps(state){
  // console.log('state',state)
  return {
    topicDetail:state.topic.topicDetail
  };
}

export default connect(mapStateToProps)(TopicDetail);