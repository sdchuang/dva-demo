import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';

// 路由组件动态加载
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  let IndexPage = dynamic({
    app,
    component:() => import('./routes/IndexPage')
  })
  let TopicDetail = dynamic({
    app,
    component:() => import('./routes/pages/home/TopicDetail')
  })

  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={IndexPage} />

        <Route path="/detail" exact component={TopicDetail} />
        <Route path="/" render={()=><Redirect to="/home"/>}/>

      </Switch>
    </Router>
  );
}

export default RouterConfig;
