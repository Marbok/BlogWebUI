import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import getTopics from 'api/GetTopics';
import { saveArticleUrl } from 'constants/URLs';
import { START, REDIRECT } from 'constants/Events';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function NewArticleForm() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [topic, setTopic] = useState(0);
    const [content, setContent] = useState('');

    const [topics, setTopics] = useState([]);
    const [articleId, setArticleId] = useState(0);
    const [next, setNext] = useState(START);

    const history = useHistory();
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        const t = getTopics();
        console.log(t);
            t.then(json => {
                setTopics(json);
                setTopic(json.find(() => true).id);
            });
    }, []);

    const cancel = () => history.goBack();
    const save = () => {
        const article = {
            title: title,
            description: description,
            topicId: topic,
            content: content
        };

        const params = {
            method: "POST",
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(article)
        }
        fetch(saveArticleUrl, params)
            .then(res => res.json())
            .then(json => {
                setArticleId(json.articleId);
                setNext(REDIRECT);
            });
        //   .catch(res => dispatch(saveError()));
    }

    const topicsOptions = topics.map(({ id, name }) => {
        return (
            <option key={id} value={id}>{name}</option>
        )
    })

    const events = {
        START: <></>,
        REDIRECT: <Redirect to={`/article/${articleId}`} />
    }

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
            {events[next]}
        </Form>
    )
}