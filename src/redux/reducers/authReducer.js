import { AUTHORIZATION, AUTHORIZATION_ERROR, LOGOUT } from '../actions/authAction'

const initialState = {
    token: '',
    next: 'START'
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHORIZATION:
            return {
                token: action.result,
                next: 'REDIRECT'
            };
        case AUTHORIZATION_ERROR:
            return {
                token: '',
                next: 'ERROR'
            };
        case LOGOUT:
            return initialState;
        default:
            return state;
    }
}