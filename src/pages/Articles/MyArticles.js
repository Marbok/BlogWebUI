import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getArticlesByNickname } from 'api/GetArticles';
import Articles from './Articles';

export default function MyArticles() {
    const [articles, setArticles] = useState([]);
    const { nickname } = useSelector(state => state.auth);

    useEffect(() => {
        getArticlesByNickname(nickname)
            .then(json => setArticles(json));
    }, [nickname]);

    return (
        <Articles articles={articles} />
    )
}