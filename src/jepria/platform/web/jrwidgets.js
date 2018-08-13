import React from 'react';

export default {
  toolbar: props =>
    <React.Fragment>
      <div>ToolbarWebBegin</div>
        {props.renderButtons()}
      <div>ToolbarWebEnd</div>
    </React.Fragment>
  ,
  toolbarButton: props =>
    <React.Fragment>
      <div>ToolbarButtonWebBegin</div>
      <div>title={props.title}-web</div>
      <div>disabled={JSON.stringify(props.disabled)}</div>
      <div>ToolbarButtonWebEnd</div>
    </React.Fragment>
  ,
}
