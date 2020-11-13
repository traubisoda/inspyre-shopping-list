import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import List from './pages/List';
import Details from './pages/Details';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="container mx-auto">
          <Switch>
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
