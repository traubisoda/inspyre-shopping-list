import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import List from './pages/List/List';
import Details from './pages/Details/Details';
import Edit from './pages/Edit/Edit';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mx-auto">
          <Switch>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/item/:id">
              <Details />
            </Route>
            <Route path="/">
              <List />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
