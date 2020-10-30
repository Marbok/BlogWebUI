import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getArticle } from '../../redux/actions/getArticleAction'

import Title from './Title'
import Description from './Description'
import Content from './Content'

function Article(props) {

    useEffect(() => {
        props.dispatch(getArticle(props.match.params.idArticle))
    }, [])

    return (
        <div>
            <Title title={props.title} />
            <div>Author: {props.author}</div>
            <Description description={props.description} />
            <Content content={props.content} />
        </div>
    )

}

function mapStateToProps(state) {
    const { title, description, content, author } = state.article;
    return { title, description, content, author };
}

export default connect(mapStateToProps)(Article);