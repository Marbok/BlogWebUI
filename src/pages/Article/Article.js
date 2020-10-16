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
            <div>Статья</div>
            <Title title={props.title} />
            <Description description={props.description} />
            <Content content={props.content} />
        </div>
    )

}

function mapStateToProps(state) {
    const { title, description, content } = state.article;
    return { title, description, content };
}

export default connect(mapStateToProps)(Article);