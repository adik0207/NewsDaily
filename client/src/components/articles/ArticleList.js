// client/src/components/articles/ArticleList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ArticleList.css';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await axios.get('/api/articles');
        setArticles(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="article-list">
      {articles.map(article => (
        <div key={article._id} className="article-card">
          <img src={article.imageUrl} alt={article.title} className="article-image" />
          <div className="article-content">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <Link to={`/articles/${article._id}`} className="btn btn-primary">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
