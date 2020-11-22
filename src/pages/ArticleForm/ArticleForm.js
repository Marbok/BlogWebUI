import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import CancelButton from 'components/CancelButton';

export default function ArticleForm({ topics, title = '', topicId, description = '', content = '', save }) {

    const [titleActual, setTitle] = useState(title);
    const [descriptionActual, setDescription] = useState(description);
    const [topic, setTopic] = useState(topicId);
    const [contentActual, setContent] = useState(content);

    useEffect(() => {
        setTopic(topicId)
    }, [topicId]);

    const topicsOptions = topics.map(({ id, name }) => {
        return (
            <option key={id} value={id}>{name}</option>
        )
    })

    const saveArticle = () => {
        const article = {
            title: titleActual,
            description: descriptionActual,
            topicId: topic,
            content: contentActual
        };
        save(article);
    }

    return (
        <Form>
            <Button variant="primary" onClick={saveArticle}>Save</Button>{' '}
            <CancelButton />
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