import React, { useEffect } from 'react'
import { getArticles } from '../../redux/actions/getArticlesAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function ArticleList(props) {

    useEffect(() => {
        props.dispatch(getArticles(props.idTopic));
    }, []);

    let articles = Object.entries(props.articles)
        .map(([key, value]) => {
            const link = `/article/${key}`;
            return (
                <li key={key}>
                    <Link to={link}>{value}</Link>
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