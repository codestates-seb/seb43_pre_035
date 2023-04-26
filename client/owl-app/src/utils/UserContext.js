import { createContext, useEffect } from 'react';
import * as AuthReducer  from './store/reducers/authReducer';
import * as ACTIONS from './store/actions/actions';

export const UserContext = createContext();

export function UserProvider(props){

    const storedInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [userInfo, dispatch] = useReducer(AuthReducer.AuthReducer, storedInfo ? storedInfo : AuthReducer.initialState);

    const handleLogin = (data) => {
        dispatch(ACTIONS.login(data));
      }

      const handleLogout = () => {
        dispatch(ACTIONS.logout());
      }

      useEffect(() => {
        const savedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
        const savedToken = localStorage.getItem('token');

        if (savedUserInfo && savedToken){
            handleLogin(savedUserInfo);
        }

      }, []);

      useEffect(() => {
        localStorage.setItem('userInfo', JSON.stringify({
            isLoggedIn: userInfo.isLoggedIn,
            memberId: userInfo.memberId,
            name: userInfo.name,
            avatarLink : userInfo.avatarLink,
            displayName : userInfo.displayName,
        }));

      }, [userInfo]);



      return (
        <UserContext.Provider value={{
            userInfo,
            dispatch,
            isLoggedIn: userInfo.isLoggedIn,
            handleUserLogin: (userInfo, token) => handleLogin(userInfo, token),
            handleUserLogout: () => handleLogout()
          }}>
            {props.children}
        </UserContext.Provider>
      )
}