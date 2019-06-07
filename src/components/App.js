import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import GatherGuilds from '../containers/GatherGuilds';
import GatherEvents from '../containers/events/GatherEvents';

export default function App() {
  return (
    <Router>
      <h1>Hello Dev!</h1>
      <Switch>
        <Route exact path="/:id" component={GatherEvents} />
        <Route exact path="/" component={GatherGuilds} />
      </Switch>
    </Router>
  );
}
