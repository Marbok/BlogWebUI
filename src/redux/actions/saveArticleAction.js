import { saveArticleUrl } from '../../utils/Constant'

export const CREATE_ARTICLE = 'CREATE_ARTICLE';
export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const ERROR_ARTICLE = 'ERROR_ARTICLE';

function saveFinish(articleId) {
    return { type: SAVE_ARTICLE, articleId }
}

function saveError() {
    return { type: ERROR_ARTICLE }
}

export function createArticle() {
    return { type: CREATE_ARTICLE }
}

export function saveArticle(article) {
    return (dispatch, getState) => {
        const { token } = getState().auth;
        const params = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(article)
        }
        fetch(saveArticleUrl, params)
            .then(res => res.json())
            .then(json => dispatch(saveFinish(json.articleId)))
            .catch(res => dispatch(saveError()));
    }
}