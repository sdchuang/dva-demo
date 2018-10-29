import React from 'react';
import { connect } from 'dva';

import { NavBar, TabBar, List, Flex } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
      fullScreen: false,
    };
  }
  componentDidMount(){
    console.log(this.props.count.topicList);
    this.exam()
  }
  add(){
    this.props.dispatch({type:'count/add'})
  }
  exam(){
    var data = {
      page:1,
      limit:3
    }
    this.props.dispatch({
      type:'count/topicData',
      payload:data,
    })

    // this.props.dispatch({
    //   type:'count/mockTest',
    // })
  }
  render(){
    const { count } = this.props;
    const botBar = {
      height:'100%',
      position:'fixed',
      width:'100%',
      bottom:0,
      paddingTop:45
    }
    return (
      <div>
        <NavBar
          mode="light"
        >首页</NavBar>

        <div style={botBar}>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
          >
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="首页"
              key="my"
              selected={this.state.selectedTab === 'yellowTab'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab',
                });
              }}
            >
              <List renderHeader={() => ''} className="my-list">
                {
                  count.topicList.map((item,i) => {
                    return (
                      <Item key={i} extra="10:30" align="top">
                        <Flex>
                          <Flex.Item style={{flex:0}}>
                            <img src={item.author.avatar_url}/> 
                          </Flex.Item>
                          <Flex.Item>
                            {item.title} <Brief>{item.author.loginname}</Brief>
                          </Flex.Item>
                        </Flex>
                      </Item>
                    )
                  })
                }
              </List>
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="发布"
              key="my1"
              selected={this.state.selectedTab === 'yellowTab1'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab1',
                });
              }}
            >
              12
            </TabBar.Item>
            <TabBar.Item
              icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
              selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
              title="我的"
              key="my11"
              selected={this.state.selectedTab === 'yellowTab11'}
              onPress={() => {
                this.setState({
                  selectedTab: 'yellowTab11',
                });
              }}
            >
              123
            </TabBar.Item>
          </TabBar>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    count:state.count,
    topicList:state.topicList
  };
}


export default connect(mapStateToProps)(IndexPage);
