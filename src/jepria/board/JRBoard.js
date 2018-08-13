import { Component } from 'react';
import { Workstate } from './state/workstate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workstate: Workstate.VIEW_LIST,
      currentIndex: null,
    };
  }

  actions = {
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

  render() {
    console.log('App.render(): this.state.workstate = ' + this.state.workstate);

    const workstate = this.state.workstate;
    const actions = this.actions;

    return (
      this.props.render(workstate, actions)
    );
  }
}
