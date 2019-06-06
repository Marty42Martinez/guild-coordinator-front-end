import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import GatherGuilds from '../containers/GatherGuilds';

export default function App() {
  return (
    <Router>
      <h1>Hello Dev!</h1>
      <Switch>
        <Route exact path="/" component={GatherGuilds} />
      </Switch>
    </Router>
  );
}
