import Cookies from 'js-cookie';
import jwtDecode from 'jwt-decode';
import { createContext } from 'react';

const session = Cookies.get('session');
const sessionDecoded = session ? jwtDecode(session) : null;

const UserData = createContext(sessionDecoded);

export default UserData;
