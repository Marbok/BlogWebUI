import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTopicsRequest } from '../../redux/actions/getTopicsAction';
import { saveArticle } from '../../redux/actions/saveArticleAction';
import { useHistory } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NewArticleForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [topic, setTopic] = useState(0);
    const [content, setContent] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();
    const { topics } = useSelector(state => state.topics);

    useEffect(() => {
        dispatch(getTopicsRequest());
    }, [dispatch]);

    useEffect(() => {
        if (topics !== undefined && topics.length !== 0) {
            setTopic(topics.find(() => true).id);
        };
    }, [topics]);

    const cancel = () => history.goBack();
    const save = () => {
        dispatch(saveArticle({
            title: title,
            description: description,
            topicId: topic,
            content: content
        }))
    }

    const topicsOptions = topics.map(({ id, name }) => {
        return (
            <option key={id} value={id}>{name}</option>
        )
    })

    return (
        <Form>
            <Button variant="primary" onClick={save}>Save</Button>{' '}
            <Button variant="primary" onClick={cancel}>Cancel</Button>
            <Form.Group controlId="title">
                <Form.Label>Title:</Form.Label>
                <Form.Control type="text" placeholder="title" onChange={e => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control type="text" placeholder="description" onChange={e => setDescription(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="topic">
                <Form.Label>Topic:</Form.Label>
                <Form.Control as="select" onChange={e => setTopic(e.target.value)}>
                    {topicsOptions}
                </Form.Control>
            </Form.Group>
            <Form.Group controlId="content">
                <Form.Label>Article body:</Form.Label>
                <Form.Control as="textarea" rows={50} onChange={e => setContent(e.target.value)} />
            </Form.Group>
        </Form>
    )
}