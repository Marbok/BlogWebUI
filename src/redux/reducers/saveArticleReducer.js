import { SAVE_ARTICLE, CREATE_ARTICLE } from '../actions/saveArticleAction';
import { START, REDIRECT } from 'constants/Events';

const initialState = {
    articleId: 0,
    next: START
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SAVE_ARTICLE:
            return {
                articleId: action.articleId,
                next: REDIRECT
            }
        case CREATE_ARTICLE:
            return initialState;
        default:
            return state;
    }
}
