import React from 'react';

import ArticlesList from './ArticlesList'

function Articles(props) {

    return (
        <div>
            <div>Список статей</div>
            <ArticlesList idTopic={props.match.params.idTopic} />
        </div>
    )

}

export default Articles;