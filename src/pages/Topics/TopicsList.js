import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopicsRequest } from '../../redux/actions/getTopicsAction';
import { useDispatch, useSelector } from 'react-redux';

export default function TopicsList() {
    const dispatch = useDispatch();
    const { topics } = useSelector(state => state.topics);

    useEffect(() => {
        dispatch(getTopicsRequest());
    }, [dispatch]);

    let topicsList = topics.map(({ id, name }) => {
        const link = `/articles/${id}`;
        return (
            <li key={id}>
                <Link to={link}>{name}</Link>
            </li>)
    })


    return (
        <ul>
            {topicsList}
        </ul>
    )
}
