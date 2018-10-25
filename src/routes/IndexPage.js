import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

class IndexPage extends React.Component{
  componentDidMount(){
    console.log(this.props.count.topicList)
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

    
    console.log(this.props.count)
    this.props.dispatch({
      type:'count/mockTest',
    })
  }
  render(){
    const { count } = this.props;
    return (
      <div className={styles.normal}>
        <div className={styles.con}>
          <p>count</p>
          <p className={styles.count}>{count.cur}</p>
          <button onClick={()=>this.add()}>+</button>
          <button onClick={()=>this.exam()}>exam</button>
        </div>
        <div>
          {
            count.topicList.map((item, i) => {
              return(
                <li key={i}>
                  <p>{item.title}</p>
                </li>
              )
            })
          }
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

// "proxy":{
//   "/apitest":{
//     "target":"https://cnodejs.org/api/v1",
//     "changeOrigin": true,
//     "pathRewrite": {
//       "^/apitest": ""
//     }
//   }
// }