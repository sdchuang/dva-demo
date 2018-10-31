
import React from 'react';
import { connect } from 'dva';

class Mine extends React.Component{

  render(){

    return(
      <div>
        Mine
      </div>
    )
  }
}

export default connect()(Mine)