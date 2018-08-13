import React from 'react';

export default {
  toolbar: props =>
    <React.Fragment>
      <div>ToolbarReactNativeBegin</div>
        {props.renderButtons()}
      <div>ToolbarReactNativeEnd</div>
    </React.Fragment>
  ,
  toolbarButton: props =>
    <React.Fragment>
      <div>ToolbarButtonReactNativeBegin</div>
      <div>title={props.title}-rn</div>
      <div>disabled={JSON.stringify(props.disabled)}</div>
      <div>ToolbarButtonReactNativeEnd</div>
    </React.Fragment>

  ,
}
