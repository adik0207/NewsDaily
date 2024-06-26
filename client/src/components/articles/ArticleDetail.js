import React from 'react';
import { useParams } from 'react-router-dom';
import articles from '../../mockArticles';
import './ArticleDetail.css';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((article) => article._id === id);

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail">
      <h1>{article.title}</h1>
      <img src={article.image} alt={article.title} />
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;
