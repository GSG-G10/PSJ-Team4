import 'antd/dist/antd.css';
import './App.less';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './index.css';
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/search/:category" />
        <Route exact path="/campany/:companyId" />
        <Route exact path="/user/:userId" />
        <Route>Not Found !!</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
