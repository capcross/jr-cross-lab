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
      <div>ToolbarWebBegin</div>
        {props.renderButtons()}
      <div>ToolbarWebEnd</div>
    </React.Fragment>
  ,
}
// const toolbar = function (props) {
//   return (
//     <React.Fragment>
//       <div>ToolbarWebBegin</div>
//         {props.renderButtons()}
//       <div>ToolbarWebEnd</div>
//     </React.Fragment>
//   );
// };

//export {toolbar};