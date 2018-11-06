
import React from 'react';
import { connect } from 'dva';

import { List, Tabs, ListView } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Home extends React.Component{
  state={
    tabs: [
      { title: '全部' },
      { title: '精华' },
      { title: '分享' },
      { title: '问答' },
      { title: '招聘' },
      { title: '测试' },
    ],
    tabArr:['all','good','share','ask','job','dev']
  }
  componentDidMount(){
    this.topicData();
    // console.log('props',this.props)
  }
  topicData(tab){
    this.props.dispatch({
      type:'topic/clear'
    })
    var data = {
      page:1,
      limit:15,
      tab:tab
    }
    this.props.dispatch({
      type:'topic/topicData',
      payload:data,
    })
  }
  toDetail(id){
    // 参数刷新后同样能读到，显示在地址栏中，需写自定义函数截字符串读参数
    this.props.history.push(`/detail?topicId=${id}`);
    // 跳转后的页面不能刷新，刷新后无query字段
    // this.props.history.push({ pathname:'/detail',query:{ topicId: id} })
  }
  tab(tab,index){
    // console.log(tab,index);
    this.topicData(this.state.tabArr[index])
  }
  tabChange(tab,index){
    // console.log(tab,index);
    this.topicData(this.state.tabArr[index])
  }

  render(){
    const { topicList } = this.props;
    // console.log('render',topicList)
    const {tabs} = this.state;
    return(
      <div>
        <Tabs 
          onTabClick={(tab,index)=>this.tab(tab,index)} 
          onChange={(tab,index)=>this.tabChange(tab,index)} 
          tabs={tabs} 
          renderTabBar={props => <Tabs.DefaultTabBar {...props} />}
        >
          <List className="my-list">
            {
              topicList.map((item,i) => {
                return (
                  <Item key={i} onClick={()=>this.toDetail(item.id)} extra="10:30" align="top">
                    {item.title} <Brief>{item.author.loginname}</Brief>
                  </Item>
                )
              })
            }
          </List>
        </Tabs>
        
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

export default connect(mapStateToProps)(Home)