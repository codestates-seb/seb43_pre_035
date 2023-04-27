import { createContext, useEffect, useReducer } from 'react';
import * as AuthReducer  from './store/reducers/authReducer';
import * as ACTIONS from './store/actions/actions';

export const UserContext = createContext();

export function UserProvider({children}){

    const storedInfo = JSON.parse(localStorage.getItem('userInfo'));
    const [userInfo, dispatch] = useReducer(AuthReducer.AuthReducer, storedInfo ? storedInfo : AuthReducer.initialState);

    const handleLogin = (data) => {
        console.log("app handleLogin");
        dispatch(ACTIONS.login(data));
      }

      const handleLogout = () => {
        console.log("app handleLogout");
        dispatch(ACTIONS.logout());
      }

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
            memberId : userInfo.memberId,
            isLoggedIn: userInfo.isLoggedIn,
            handleUserLogin: (userInfo) => handleLogin(userInfo),
            handleUserLogout: () => handleLogout()
          }}>
            {children}
        </UserContext.Provider>
      )
}