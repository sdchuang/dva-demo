import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';

// 路由组件动态加载
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  let IndexPage = dynamic({
    app,
    component:() => import('./routes/IndexPage')
  })
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
