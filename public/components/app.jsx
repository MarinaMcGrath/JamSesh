import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './Home.jsx';
import SignIn from './SignIn.jsx';
import SignUp from './SignUp.jsx';
import CreateGroup from './CreateGroup.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Home}/>
          <Route path="sign-in" component={SignIn}/>
          <Route path="sign-up" component={SignUp}/>
          <Route path="create-group" component={CreateGroup}/>
        </Router>
    );
  }
}

export default App;