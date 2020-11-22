import React from 'react';
import { Link } from 'react-router-dom';

export default function Articles({ articles }) {

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