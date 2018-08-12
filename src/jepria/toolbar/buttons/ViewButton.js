import React from 'react';
import {Workstate} from '../../board/state/workstate';

const  ViewButton = props => {
  const workstate = props.workstate;
  console.log('ViewButton: workstate = ' + workstate);
  
  const isDisabled = !(workstate === Workstate.EDIT || workstate === Workstate.SELECTED);

  return (
      isDisabled ? <div>ViewButtonDisabledWeb</div> : <div>ViewButtonEnabledWeb</div>
  )
};

export default ViewButton;
