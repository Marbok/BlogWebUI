import { SAVE_ARTICLE } from '../actions/saveArticleAction';

const initialState = {
    articleId: '',
    next: 'START'
}

export default function (state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
