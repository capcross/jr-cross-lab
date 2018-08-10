import React, { Component } from 'react';
import Toolbar from './jepria/toolbar/Toolbar';
import Form from './jepria/form/Form';
import Statusbar from './jepria/statusbar/Statusbar';

class App extends Component {
  render() {

    return (
      <div>
        <Toolbar/>
        <Form/>
        <Statusbar/>
      </div>
    );
  }
}

export default App;
