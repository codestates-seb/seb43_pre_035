import React, { createContext, useReducer, useContext } from 'react';

const UserStateContext = createContext();
const UserDispatchContext = createContext();

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
      case 'UPDATE_USER':
        return {
          ...state,
          user: action.payload,
        };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, { user:  {
        "memberId": 1,
        "email": "hgd@gmail.com",
        "name": "홍길동",
        "avatarLink": "https://mypreprojecttempbucket.s3.ap-northeast-2.amazonaws.com/owl08.png",
        "displayName": "gildonglove123"
    } });

  return (
    <UserStateContext.Provider value={state}>
      <UserDispatchContext.Provider value={dispatch}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export const useUserState = () => {
  const context = useContext(UserStateContext);
  if (context === undefined) {
    throw new Error('useUserState must be used within a UserProvider');
  }
  return context;
};

export const useUserDispatch = () => {
  const context = useContext(UserDispatchContext);
  if (context === undefined) {
    throw new Error('useUserDispatch must be used within a UserProvider');
  }
  return context;
};