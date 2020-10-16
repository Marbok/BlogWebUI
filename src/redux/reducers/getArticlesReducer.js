import { GET_ARTICLES_ACTION } from '../actions/getArticlesAction'

const initialState = { articles: {} }

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES_ACTION:
            return {
                articles: action.responce
            };
        default:
            return state;
    }
}