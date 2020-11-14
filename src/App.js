import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './common/Header';
import Notification from './common/Notification';
import List from './pages/List/List';
import Details from './pages/Details/Details';
import Edit from './pages/Edit/Edit';
import Create from './pages/Create/Create';

const getNotification = (state) => state.notification;

function App() {
  const notification = useSelector(getNotification);

  return (
    <Router>
      <div>
        <Header />
        {notification.text && <Notification>{notification.text}</Notification>}
        <div className="container mx-auto">
          <Switch>
            <Route path="/edit/:id">
              <Edit />
            </Route>
            <Route path="/item/:id">
              <Details />
            </Route>
            <Route path="/new">
              <Create />
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
