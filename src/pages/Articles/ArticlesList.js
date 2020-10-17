import React, { useEffect } from 'react'
import { getArticles } from '../../redux/actions/getArticlesAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function ArticleList(props) {

    useEffect(() => {
        props.dispatch(getArticles(props.idTopic));
    }, []);

    let articles = props.articles
        .map(({ id, title }) => {
            const link = `/article/${id}`;
            return (
                <li key={id}>
                    <Link to={link}>{title}</Link>
                </li>)
        })

    return (
        <ul>
            {articles}
        </ul>
    )
}

function mapStateToProps(state) {
    const { articles } = state.articles;
    return { articles };
}

export default connect(mapStateToProps)(ArticleList);