import { GET_ARTICLE_ACTION } from '../actions/getArticleAction'

const initialState = {
    title: "",
    description: "",
    content: "",
    author: ""
}

export default function (state = initialState, { type, responce }) {
    switch (type) {
        case GET_ARTICLE_ACTION:
            return {
                title: responce.title,
                description: responce.description,
                content: responce.content,
                author: responce.author
            }
        default:
            return state;
    }
}