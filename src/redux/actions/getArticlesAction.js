import { articlesUrl } from "../../utils/Constant"

export const GET_ARTICLES_ACTION = 'GET_ARTICLES_ACTION'

function getArticlesFinish(responce) {
    return { type: GET_ARTICLES_ACTION, responce }
}

export function getArticles(id) {
    return (dispatch) => {
        fetch(`${articlesUrl}?topicId=${id}`)
            .then(responce => responce.json())
            .then(json => dispatch(getArticlesFinish(json)))
    }
}