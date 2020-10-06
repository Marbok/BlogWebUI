import React from 'react'

import Topics from './Topics'

class TableOfContents extends React.Component {

    constructor() {
        super();
        this.state = { topics:[] };
      }
    
      componentDidMount() {
        fetch("http://localhost:8080/getTopics")
        .then(responce => responce.json())
        .then(json => this.setState({ topics: json }))
      }
    
      render() {
        return (
          <Topics topics={ this.state.topics } />
        )
      }
}

export default TableOfContents; 