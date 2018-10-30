
import React from 'react';
import { connect } from 'dva';

import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Home extends React.Component{

  componentDidMount(){
    this.topicData();
    // console.log('props',this.props)
  }
  topicData(){
    var data = {
      page:1,
      limit:15
    }
    this.props.dispatch({
      type:'topic/topicData',
      payload:data,
    })
  }

  render(){
    const { topicList } = this.props;
    console.log('render',topicList)
    return(
      <div>
        <List className="my-list">
          {
            topicList.map((item,i) => {
              return (
                <Item key={i} extra="10:30" align="top">
                  {item.title} <Brief>{item.author.loginname}</Brief>
                </Item>
              )
            })
          }
        </List>
      </div>
    )
  }
}

function mapStateToProps(state){
  console.log('state',state)
  return {
    topicList:state.topic.topicList
  };
}

export default connect(mapStateToProps)(Home)