import { articleUrl } from '../../utils/Constant'

export const GET_ARTICLE_ACTION = 'GET_ARTICLE_ACTION'

function getArticleFinish(responce) {
    return { type: GET_ARTICLE_ACTION, responce }
}

export function getArticle(id) {
    return (dispatch) => {
        fetch(`${articleUrl}/${id}`)
            .then(result => result.json())
            .then(json => dispatch(getArticleFinish(json)))
    }
}