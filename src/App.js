import React, { Component } from 'react';

import JRBoard from './jepria/board/JRBoard';
import Toolbar from './jepria/toolbar/Toolbar';
import Form from './jepria/form/Form';
import Statusbar from './jepria/statusbar/Statusbar';

class App extends Component {

  render() {

    return (
        <JRBoard render={(workstate) => (
          <React.Fragment>
            <Toolbar workstate={workstate}/>
            <Form workstate={workstate}/>
            <Statusbar workstate={workstate}/>
          </React.Fragment>
        )}/>
    );
  }
}

export default App;
