import * as ACTION_TYPES from "./action_types";

export const login = (data, token) => {
    return {
        type: ACTION_TYPES.LOGIN,
        memberId: data.memberId,
        email: data.email,
        name: data.name,
        avatarLink: data.avatarLink,
        displayName: data.displayName,
        token: token
    }
}

export const logout = () => {
    console.log('logout success!');
    return {
        type: ACTION_TYPES.LOGOUT
    }
}