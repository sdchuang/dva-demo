import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
// import IndexPage from './routes/IndexPage';

// 路由组件动态加载
import dynamic from 'dva/dynamic'

function RouterConfig({ history, app }) {
  let IndexPage = dynamic({
    app,
    component:() => import('./routes/IndexPage')
  })
  // let Home = dynamic({
  //   app,
  //   component:() => import('./routes/pages/Home')
  // })
  // let Mine = dynamic({
  //   app,
  //   component:() => import('./routes/pages/Mine')
  // })

  return (
    <Router history={history}>
      <Switch>
        <Route path="/home" exact component={IndexPage} />
        {/* <Route path="/home" exact component={Home} />
        <Route path="/mine" exact component={Mine} /> */}
        <Route path="/" render={()=><Redirect to="/home"/>}/>

      </Switch>
    </Router>
  );
}

export default RouterConfig;
