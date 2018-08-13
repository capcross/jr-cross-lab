import React from 'react';

import JRBoard from './jepria/board/JRBoard';
import jrwidgets from './jepria/platform/web/jrwidgets';
//import jrwidgets from './jepria/platform/rn/jrwidgets';
import Toolbar from './jepria/toolbar/Toolbar';
import ViewButton from './jepria/toolbar/buttons/ViewButton';
import ListButton from './jepria/toolbar/buttons/ListButton';
import Form from './jepria/form/Form';
import Statusbar from './jepria/statusbar/Statusbar';

const App = () => {
  return (
    <JRBoard widgets={jrwidgets} render={(workstate, actions) => (
      <React.Fragment>

        <Toolbar impl={jrwidgets.toolbar} renderButtons = { () => {
          return (
            <React.Fragment>
              <ViewButton title="ViewButtonTitle" impl={jrwidgets.toolbarButton} workstate={workstate} onClick={actions.view}/>
              {/* <ListButton workstate={workstate} onClick={actions.list}/> */}
            </React.Fragment>
          )
        }}/>

        <Form workstate={workstate}/>

        <Statusbar workstate={workstate}/>
      </React.Fragment>
    )}/>
  )
}

export default App;
