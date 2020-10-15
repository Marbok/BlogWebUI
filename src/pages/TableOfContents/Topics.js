import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopicsRequest } from '../../redux/actions/getTopicsAction';
import { connect } from 'react-redux';

function Topics(props) {

    useEffect(() => {
        props.dispatch(getTopicsRequest());
    }, []);

    let topics = Object.entries(props.topics)
        .map(([key, value]) => {
            const link = "/articles/" + key;
            return (
                <li key={key}>
                    <Link to={link}>{value}</Link>
                </li>)
        })

    return (
        <ul>
            {topics}
        </ul>)
}

function mapStateToProps(state) {
    const { topics } = state.topics;
    return { topics };
}

export default connect(mapStateToProps)(Topics);