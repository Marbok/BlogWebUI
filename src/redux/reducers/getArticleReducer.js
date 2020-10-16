import { GET_ARTICLE_ACTION } from '../actions/getArticleAction'

const initialState = {
    title: "",
    description: "",
    content: ""
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLE_ACTION:
            return {
                title: action.responce.title,
                description: action.responce.description,
                content: action.responce.content
            }
        default:
            return state;
    }
}