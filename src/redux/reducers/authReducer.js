import { AUTHORIZATION, AUTHORIZATION_ERROR } from '../actions/authAction'

const initialState = {
    token: '',
    error: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHORIZATION:
            return {
                token: action.result,
                error: false
            };
        case AUTHORIZATION_ERROR:
            return {
                token: '',
                error: true
            }
        default:
            return state;
    }
}