// Modules
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  createContext, useState, useEffect, useContext,
} from 'react';
import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
// Components
import Footer from './components/common/Footer';
import Nav from './components/common/Nav';
import { CompanyProfile, EmployeeProfile } from './pages';

// Context
import { UserData } from './context';
// Styles
import 'antd/dist/antd.css';
import './App.less';
import './index.css';
import Search from './pages/search/Search';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const session = Cookies.get('session');
    if (session) {
      const getData = () => {
        const sessionDecoded = jwtDecode(session);
        return sessionDecoded;
      };
      setData(getData());
    }
  }, []);
  return (
    <UserData.Provider value={data}>
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" />

          <Route exact path="/search/:category" component={Search} />

          <Route exact path="/company/:companyId">
            <CompanyProfile />
          </Route>
          <Route exact path="/employee/:employeeId">
            <EmployeeProfile />
          </Route>
          <Route>Not Found !!</Route>
        </Switch>
        <Footer />
      </Router>
    </UserData.Provider>
  );
}

export default App;
