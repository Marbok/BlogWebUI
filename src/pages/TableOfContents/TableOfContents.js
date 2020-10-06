import React from 'react'

import Topics from './Topics'
import { topicsUrl } from '../../utils/Constant';

class TableOfContents extends React.Component {

  constructor() {
    super();
    this.state = { topics: [] };
  }

  componentDidMount() {
    fetch(topicsUrl)
      .then(responce => responce.json())
      .then(json => this.setState({ topics: json }))
  }

  render() {
    return (
      <div>
        <div>Темы</div>
        <Topics topics={this.state.topics} />
      </div>
    )
  }
}

export default TableOfContents; 