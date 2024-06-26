import React from 'react';
import articles from '../mockArticles';
import ArticleCard from './articles/ArticleCard';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to NewsDaily</h1>
      <div className="article-list">
        {articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
