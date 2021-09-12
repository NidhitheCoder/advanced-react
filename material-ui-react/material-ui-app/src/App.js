import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/Create';
import Notes from './pages/Notes';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Notes />
        </Route>
        <Route exact path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
