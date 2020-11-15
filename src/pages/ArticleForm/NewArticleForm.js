import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopicsRequest } from '../../redux/actions/getTopicsAction'

import Form from 'react-bootstrap/Form';

export default function NewArticleForm() {

    const dispatch = useDispatch();
    const { topics } = useSelector(state => state.topics);

    useEffect(() => {
        dispatch(getTopicsRequest());
    }, [dispatch]);

    const topicsOptions = topics.map(({ id, name }) => {
        return (
            <option value={id}>{name}</option>
        )
    })

    return (
        <Form>
            <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="title" />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" placeholder="description" />
            </Form.Group>
            <Form.Group controlId="topic">
                <Form.Label>Topic:</Form.Label>
                <Form.Control as="select">
                    {topicsOptions}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Article body:</Form.Label>
                <Form.Control as="textarea" rows={50} />
            </Form.Group>
        </Form>
    )
}