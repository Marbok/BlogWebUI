import React from 'react';
import { Link } from 'react-router-dom'

function Topics(props) {
    let index = Object.entries(props.topics)
        .map(([key, value]) => {
            const link = "/articles/" + key;
            return (
                <li key={key}>
                    <Link to={link}>{value}</Link>
                </li>)
        })
    return (
        <div>
            <div>Темы</div>
            <ul>
                {index}
            </ul>
        </div>)
}

export default Topics;