import React, { useEffect } from 'react'
import { getArticles } from '../../redux/actions/getArticlesAction'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export default function ArticleList({ idTopic }) {

    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.articles);

    useEffect(() => {
        dispatch(getArticles(idTopic));
    }, [dispatch, idTopic]);

    let articlesList = articles.map(({ id, title }) => {
        const link = `/article/${id}`;
        return (
            <li key={id}>
                <Link to={link}>{title}</Link>
            </li>)
    })

    return (
        <ul>
            {articlesList}
        </ul>
    )
}