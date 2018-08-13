import {Workstate} from './state/workstate';

const actions = {
  add: () => {
    console.log("App.add()");
    this.setState({
      workstate: Workstate.ADD,
      currentIndex: null,
    });
  },
  save: () => {
    console.log("App.save()");
    this.setState({ workstate: Workstate.VIEW_DETAILS });
  },
  edit: () => {
    console.log("App.edit()");
    this.setState({ workstate: Workstate.EDIT });
  },
  select: selectedIndex => {
    console.log("App.select()");
    this.setState({
      workstate: Workstate.SELECTED,
      currentIndex: selectedIndex,
    });
  },
  search: () => {
    console.log("App.search()");
    this.setState({ workstate: Workstate.SEARCH });
  },
  find: () => {
    console.log("App.find()");
    this.setState({ workstate: Workstate.VIEW_LIST });
  },
  view: selectedIndex => {
    console.log("App.view()");
    console.log("App.view(): selectedIndex = " + selectedIndex);
    this.setState({
      workstate: Workstate.VIEW_DETAILS,
      currentIndex: selectedIndex ? selectedIndex : this.state.currentIndex,
    });
  },
  list: () => {
    console.log("App.list()");
    this.setState({ workstate: Workstate.VIEW_LIST });
  },
  delete: () => {
    console.log("App.delete()");
  },
};

export default function (props) {
  let workstate = 3;
  return (
    props.render(workstate, actions)
  );
};
