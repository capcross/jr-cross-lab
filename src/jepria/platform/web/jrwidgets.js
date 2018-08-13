import React from 'react';

const toolbarButtonStyle = {
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
};

export default {
  toolbar: props =>
    <React.Fragment>
        {props.renderButtons()}
    </React.Fragment>
  ,
  toolbarButton: props => {
    const handleClick = (e) => {
      e.preventDefault();
      props.onClick();
    }

    return (
      <button onClick={handleClick} style={toolbarButtonStyle}>
        {
          props.src ?
            <img src={props.src} alt={props.title} className={props.disabled ? "disabled" : "enabled"}/> :
            props.title
        }
      </button>
    )
  }
}
