import * as ACTION_TYPES from "../actions/action_types";

export const initialState = {
    isLoggedIn: false,
    memberId: '',
    email: '',
    name: '',
    avatarLink: '',
    displayName: '',
    token: ''
};

export const AuthReducer = (state, action) => {
    console.log('reducer is working!', action.type);
    switch (action.type) {
        case ACTION_TYPES.LOGIN:
        return {
            ...state,
            isLoggedIn: true,
            memberId: action.memberId,
            email: action.email,
            name: action.name,
            avatarLink: action.avatarLink,
            displayName: action.displayName,
            token: action.token
        };
        case ACTION_TYPES.LOGOUT:
        return {
            ...state,
            isLoggedIn: false,
            memberId: '',
            email: '',
            name: '',
            avatarLink: '',
            displayName: '',
            token: ''
        };
        default:
            return state;
    }
}