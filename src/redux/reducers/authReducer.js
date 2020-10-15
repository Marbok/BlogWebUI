import { AUTHORIZATION } from '../actions/authAction'

const initialState = { auth: false };

export default function (state = initialState, action) {
    switch (action.type) {
        case AUTHORIZATION:
            return { auth: true };
        default:
            return state;
    }
}