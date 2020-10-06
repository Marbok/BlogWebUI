import React from 'react';

import { articlesUrl } from '../../utils/Constant'
import ArticlesList from './ArticlesList'

class Articles extends React.Component {

    constructor() {
        super()
        this.state = { articles: [] }
    }


    componentDidMount() {
        const id = this.props.match.params.idTopic;
        const url = new URL(articlesUrl + '/' + id)
        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ articles: json }))

    }

    render() {
        return (
            <div>
                <div>Список статей</div>
                <ArticlesList articles={this.state.articles} />
            </div>
        )
    }
}

export default Articles;