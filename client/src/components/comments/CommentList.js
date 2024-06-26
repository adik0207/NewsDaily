import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ListGroup, Container } from 'react-bootstrap';

const CommentList = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const res = await axios.get(`/api/comments/${articleId}`);
      setComments(res.data);
    };
    fetchComments();
  }, [articleId]);

  return (
    <Container>
      <h2>Comments</h2>
      <ListGroup>
        {comments.map(comment => (
          <ListGroup.Item key={comment._id}>
            <p>{comment.content}</p>
            <p><strong>{comment.author.username}</strong> on {new Date(comment.date).toLocaleDateString()}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default CommentList;
