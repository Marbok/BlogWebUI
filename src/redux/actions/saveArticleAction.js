import { saveArticleUrl } from '../../utils/Constant'

export const SAVE_ARTICLE = 'SAVE_ARTICLE';
export const ERROR_ARTICLE = 'ERROR_ARTICLE';

function saveFinish() {
    return { type: SAVE_ARTICLE }
}

function saveError() {
    return { type: ERROR_ARTICLE }
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
            .then(res => dispatch(saveFinish()))
            .catch(res => dispatch(saveError()));
    }
}