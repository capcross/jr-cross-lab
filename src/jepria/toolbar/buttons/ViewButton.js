import {Workstate} from '../../board/state/workstate';

export default function (props) {
  return props.impl({
    title: props.title,
    disabled: !(props.workstate === Workstate.EDIT || props.workstate === Workstate.SELECTED),
    onClick: props.onClick
  })
};
