import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getArticle } from '../../redux/actions/getArticleAction'

import Title from './Title'
import Description from './Description'
import Content from './Content'

export default function Article({ match: { params: { idArticle } } }) {

    const dispatch = useDispatch();
    const { title, author, description, content } = useSelector(state => state.article);


    useEffect(() => {
        dispatch(getArticle(idArticle))
    }, [dispatch, idArticle])

    return (
        <div>
            <Title title={title} />
            <div>Author: {author}</div>
            <Description description={description} />
            <Content content={content} />
        </div>
    );

}