import React, { Component } from 'react';
import Toolbar from './jepria/toolbar/Toolbar';
import Form from './jepria/form/Form';
import Statusbar from './jepria/statusbar/Statusbar';

class App extends Component {

  render() {

    return (
      <React.Fragment>
        <Toolbar render={<div>Toolbar-web</div>}/>
        <Form/>
        <Statusbar/>
      </React.Fragment>
    );
  }
}

export default App;
