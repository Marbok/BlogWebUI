import React, { useEffect, useState } from 'react';
import { getArticlesByTopicId } from 'api/GetArticles';
import Articles from './Articles';

export default function ArticlesByTopic({ match: { params: { idTopic } } }) {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticlesByTopicId(idTopic)
            .then(json => setArticles(json));
    }, [idTopic]);

    return (
        <Articles articles={articles} />
    )
}