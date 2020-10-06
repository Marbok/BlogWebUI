import React from 'react'
import { Link } from 'react-router-dom'

function ArticleList(props) {
    let articles = Object.entries(props.articles)
        .map(([key, value]) => {
            const link = '/article/' + key;
            return (<li key={key}>
                <Link to={link}>{value}</Link>
            </li>)
        })
    return (
        <ul>
            { articles}
        </ul>
    )
}

export default ArticleList;