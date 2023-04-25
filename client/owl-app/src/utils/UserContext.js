import { createContext, useState, useEffect, useContext } from 'react';
import * as AuthReducer  from './store/reducers/authReducer';
import * as ACTIONS from './store/actions/actions';

export const UserContext = createContext();

export function UserProvider(props){

    const [state, dispatch] = useReducer(AuthReducer.AuthReducer, AuthReducer.initialState);

    const handleLogin = (data, token) => {
        dispatch(ACTIONS.login(data, token));
      }

      const handleLogout = () => {
        dispatch(ACTIONS.logout());
      }
    const [userInfo, setUserInfo] = useState({
        isLoggedIn: false,
        memberId: '',
        email: '',
        name: '',
        avatarLink: '',
        displayName: '',
        roles: [],
        token: ''
      });


      useEffect(() => {
        const savedUserInfo = localStorage.getItem('userInfo');
        const savedToken = localStorage.getItem('token');

        if (savedUserInfo && savedToken){
            setUserInfo({isLoggedIn: true, ...JSON.parse(savedUserInfo), token: token})
        }

      }, []);

      useEffect(() => {
        localStorage.setItem('userInfo', {
            isLoggedIn: userInfo.isLoggedIn,
            memberId: userInfo.memberId,
            email: userInfo.email,
            name: userInfo.name,
            avatarLink : userInfo.avatarLink,
            displayName : userInfo.displayName,
            roles : userInfo.roles
        });

        localStorage.setItem('token', userInfo.token);

      }, [userInfo]);



      return (
        <UserContext.Provider value={{
            state,
            dispatch,
            isLoggedIn: state.isLoggedIn,
            handleUserLogin: (userInfo, token) => handleLogin(userInfo, token),
            handleUserLogout: () => handleLogout()
          }}>
            {props.children}
        </UserContext.Provider>
      )
}