import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch } from "react-router-dom";
import PropTypes from "prop-types";
// import {Login, Signup, UserHome} from './components'
// import {me} from './store'
import {
  Homepage,
  Blends,
  SingleBlend,
  Teas,
  SingleTea,
  About
} from "./components";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    // this.props.loadInitialData()
  }

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/home" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/blends" component={Blends} />
        <Route exact path="/blends/:blendId" component={SingleBlend} />
        <Route exact path="/teas" component={Teas} />
        <Route exact path="/teas/:teaId" component={SingleTea} />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    // isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  // return {
  //   loadInitialData() {
  //     dispatch(me())
  //   }
  // }
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
// Routes.propTypes = {
//   loadInitialData: PropTypes.func.isRequired,
//   isLoggedIn: PropTypes.bool.isRequired
// }
