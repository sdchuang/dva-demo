
import React from 'react';
import { connect } from 'dva';
import { getRoutes } from "../../../utils/params";

import { NavBar, Card, WhiteSpace, List, Icon } from 'antd-mobile';
const Item = List.Item;

class TopicDetail extends React.Component{
  componentWillMount(){
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
  toBack(){
    this.props.history.push('/home');
  }

  render(){
    const { topicDetail } = this.props;
    return (
      <div>
        <NavBar
          mode="dark"
          icon={<Icon type="left" />}
          onLeftClick={() => this.toBack()}
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
        <WhiteSpace size="lg" />

        <List className="my-list">
          <Item>{topicDetail.reply_count}回复</Item>
        </List>
        <WhiteSpace size="xs" />
        {
          topicDetail.replies && topicDetail.replies.map((item,i) => {
            return(
              <div key={i}>
                <WhiteSpace size="sm" />
                <Card full>
                  <Card.Header
                    title={item.author.loginname}
                    extra={<span>赞</span>}
                  />
                  <Card.Body>
                    <div dangerouslySetInnerHTML = {{ __html:item.content }}></div>
                  </Card.Body>
                  <Card.Footer extra={<div>{item.create_at}</div>} />
                </Card>
              </div>
            )
          })
        }
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