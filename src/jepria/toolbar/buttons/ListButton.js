import React from 'react';
import {Workstate} from '../../board/state/workstate';

const  ListButton = props => {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.EDIT || workstate === Workstate.SELECTED);

  return (
      isDisabled ? <div>ListButtonDisabledWeb</div> : <div>ListButtonEnabledWeb</div>
  )
};

export default ListButton;
