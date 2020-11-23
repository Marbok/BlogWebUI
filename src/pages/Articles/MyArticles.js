import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import API from 'api/API';
import Articles from './Articles';

export default function MyArticles() {
    const [articles, setArticles] = useState([]);
    const { nickname } = useSelector(state => state.auth);

    useEffect(() => {
        API.getArticlesByNickname(nickname)
            .then(json => setArticles(json));
    }, [nickname]);

    return (
        <Articles articles={articles} />
    )
}