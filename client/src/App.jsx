// Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import { CompanyProfile, EmployeeProfile } from './pages';

// Context
import UserDataProvider from './context/UserDataContext';

// Styles
import 'antd/dist/antd.css';
import './App.less';
import './index.css';

function App() {
  return (
    <UserDataProvider>
      <Router>
        {/* <Nav /> */}
        <Switch>
          <Route exact path="/">
            <Nav />

          </Route>
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
    </UserDataProvider>
  );
}

export default App;
