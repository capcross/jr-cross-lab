import {Workstate} from '../../board/state/workstate';

export default function (props) {
  const workstate = props.workstate;
  const isDisabled = !(workstate === Workstate.ADD ||
                       workstate === Workstate.EDIT ||
                       workstate === Workstate.VIEW_DETAILS);

  return props.impl({
    title: props.title,
    disabled: isDisabled,
    onClick: props.onClick,
  })
};
