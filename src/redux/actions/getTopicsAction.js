import { topicsUrl } from '../../utils/Constant'

export const GET_TOPICS_ACTION = "GET_TOPICS_ACTIONS"

function getTopicsFinish(responce) {
    return { type: GET_TOPICS_ACTION, responce }
}

export function getTopicsRequest() {
    return (dispatch) => {
        fetch(topicsUrl)
            .then(responce => responce.json())
            .then(json => dispatch(getTopicsFinish(json)))
    }
}