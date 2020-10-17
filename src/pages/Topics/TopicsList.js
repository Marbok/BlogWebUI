import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopicsRequest } from '../../redux/actions/getTopicsAction';
import { connect } from 'react-redux';

function TopicsList(props) {

    useEffect(() => {
        props.dispatch(getTopicsRequest());
    }, []);

    let topics = props.topics
        .map(({ id, name }) => {
            const link = `/articles/${id}`;
            return (
                <li key={id}>
                    <Link to={link}>{name}</Link>
                </li>)
        })

    return (
        <ul>
            {topics}
        </ul>
    )
}

function mapStateToProps(state) {
    const { topics } = state.topics;
    return { topics };
}

export default connect(mapStateToProps)(TopicsList);