import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import getTopics from 'api/GetTopics';
import { saveArticleUrl } from 'constants/URLs';

import ArtcleForm from './ArticleForm';

export default function NewArticleForm() {

    const [topic, setTopic] = useState(0);
    const [topics, setTopics] = useState([]);

    const history = useHistory();
    const { token } = useSelector(state => state.auth);

    useEffect(() => {
        getTopics().then(json => {
            setTopics(json);
            setTopic(json.find(() => true).id);
        });
    }, []);

    const cancel = () => history.goBack();
    const save = (article) => {
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
            .then(json => { history.push(`/article/${json.articleId}`) });
        //   .catch(res => dispatch(saveError()));
    }

    return (
        <ArtcleForm
            topics={topics}
            topicId={topic}
            save={save}
            cancel={cancel}
        />
    )
}