import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ArticleDetail from './components/articles/ArticleDetail';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
