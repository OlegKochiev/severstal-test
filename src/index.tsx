import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Get from './pages/Get';
import Post from './pages/Post';
import Delete from './pages/Delete';
import NavBar from './components/NavBar/NavBar';

import './css/index.css';
import './css/reset.css';
import Layout from './components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/get" element={<Get />} />
          <Route path="/post" element={<Post />} />
          <Route path="/delete" element={<Delete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
