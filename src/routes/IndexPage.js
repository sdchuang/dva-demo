import React from 'react';
import { connect } from 'dva';

import Home from './pages/home/Home'
import Mine from './pages/mine/Mine'

import { NavBar, TabBar } from 'antd-mobile';

class IndexPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'yellowTab',
      hidden: false,
      fullScreen: false,
    };
  }
  componentDidMount(){
    
  }
  render(){
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
          mode="dark"
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
              <Home history ={this.props.history}/>
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
                console.log(this.props)
                console.log(this.props.history)
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
              <Mine history ={this.props.history}/>
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
