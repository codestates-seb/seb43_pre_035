import * as ACTION_TYPES from "../actions/action_types";

export const initialState = '';

export const QueriesReducer = (state, action) => {
    console.log('queries usereducer working!');

    switch (action.type) {
        case ACTION_TYPES.DIR_ASC:
            return {
                // `${state}`
            }

        case ACTION_TYPES.DIR_DESC:
            return {

            }

        case ACTION_TYPES.SORT_ACTIVE:
            return {

            }
    }

}