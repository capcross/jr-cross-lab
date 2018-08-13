import React from 'react';

const toolbarButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

export default {
  toolbar: props =>
    <React.Fragment>
      <div>ToolbarWebBegin</div>
        {props.renderButtons()}
      <div>ToolbarWebEnd</div>
    </React.Fragment>
  ,
  toolbarButton: props => {
    const handleClick = (e) => {
      e.preventDefault();
      props.onClick();
    }
    return (
      <button onClick={handleClick} disabled={props.disabled} style={toolbarButtonStyle}>
        {props.title}
      </button>
    )
  }
}
