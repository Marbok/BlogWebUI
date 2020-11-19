import { topicsUrl } from 'constants/URLs';

export default async function getTopics() {
    return await fetch(topicsUrl)
        .then(responce => responce.json());
}