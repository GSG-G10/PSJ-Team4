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
import CompanyProfile from './pages/CompanyProfile';
import EmployeeProfile from './pages/EmployeeProfile';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" />
        <Route exact path="/search/:category" />
        <Route exact path="/campany/:companyId">
          <CompanyProfile />
        </Route>
        <Route exact path="/employee/:employeeId">
          <EmployeeProfile />
        </Route>
        <Route>Not Found !!</Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
