import React from 'react';

function TableOfContents(props) {
    let index = Object.entries(props.topics)
            .map(([key, value]) => <li key={key}>{ value }</li>)
    return (
    <div>
        <div>Темы</div>
        <ul>
            { index }
        </ul>
    </div>)
}

export default TableOfContents;