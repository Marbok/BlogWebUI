import React from 'react'
import { articleUrl } from '../../utils/Constant'

import Title from './Title'
import Description from './Description'
import Content from './Content'

class Article extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "",
            description: "",
            content: ""
        }
    }

    componentDidMount() {
        let id = this.props.match.params.idArticle;
        let url = new URL(articleUrl + '/' + id);
        fetch(url)
            .then(result => result.json())
            .then(json => this.setState({
                title: json.title,
                description: json.description,
                content: json.content
            }))
    }

    render() {
        return (
            <div>
                <div>Статья</div>
                <Title title={this.state.title} />
                <Description description={this.state.description} />
                <Content content={this.state.content} />
            </div>
        );
    }

}

export default Article;