import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const CommentForm = ({ articleId }) => {
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/comments/${articleId}`, { content }, {
        headers: {
          'x-auth-token': localStorage.getItem('token')
        }
      });
      setContent('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <h2>Leave a Comment</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Comment</Form.Label>
          <Form.Control as="textarea" value={content} onChange={(e) => setContent(e.target.value)} required />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>
    </Container>
  );
};

export default CommentForm;
