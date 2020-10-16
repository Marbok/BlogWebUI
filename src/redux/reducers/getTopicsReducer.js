import { GET_TOPICS_ACTION } from '../actions/getTopicsAction'

const initialState = { topics: [] }

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_TOPICS_ACTION:
            return {
                topics: action.responce
            };
        default:
            return state;
    }
}