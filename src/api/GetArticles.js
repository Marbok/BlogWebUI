import { articlesUrl } from "utils/Constant"

export async function getArticlesByTopicId(id) {
    return await fetch(`${articlesUrl}?topicId=${id}`)
        .then(responce => responce.json());
}

export async function getArticlesByNickname(nickname) {
    return await fetch(`${articlesUrl}?nickname=${nickname}`)
        .then(responce => responce.json());
}