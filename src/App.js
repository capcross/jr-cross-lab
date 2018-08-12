import React, { Component } from 'react';

import JRBoard from './jepria/board/JRBoard';
import Toolbar from './jepria/toolbar/Toolbar';
import ViewButton from './jepria/toolbar/buttons/ViewButton';
import ListButton from './jepria/toolbar/buttons/ListButton';
import Form from './jepria/form/Form';
import Statusbar from './jepria/statusbar/Statusbar';

const App = () =>
  <JRBoard render={(workstate, actions) => (
    <React.Fragment>
      <Toolbar renderButtons = { () =>
        <React.Fragment>
          <ViewButton workstate={workstate} onClick={actions.view}/>
          <ListButton workstate={workstate} onClick={actions.list}/>
        </React.Fragment>
      }/>
      <Form workstate={workstate}/>
      <Statusbar workstate={workstate}/>
    </React.Fragment>
  )}/>

export default App;
