import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Button, Container } from 'react-bootstrap';

const ArticleForm = ({ article = {} }) => {
  const [title, setTitle] = useState(article.title || '');
  const [summary, setSummary] = useState(article.summary || '');
  const [content, setContent] = useState(article.content || '');
  const [category, setCategory] = useState(article.category || '');
  const navigate = useNavigate();
  const { id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newArticle = { title, summary, content, category };
    try {
      if (id) {
        await axios.put(`/api/articles/${id}`, newArticle);
      } else {
        await axios.post('/api/articles', newArticle);
      }
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h1>{id ? 'Edit' : 'Create'} Article</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Summary</Form.Label>
          <Form.Control as="textarea" value={summary} onChange={(e) => setSummary(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="primary">{id ? 'Update' : 'Create'}</Button>
      </Form>
    </Container>
  );
};

export default ArticleForm;
