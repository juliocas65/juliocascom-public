import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Articles } from '../components/pages/Articles';
import { Experience } from '../components/pages/Experience';
import { Home } from '../components/pages/Home';
import { NotFound } from '../components/pages/NotFound';
import { SocialMedia } from '../components/pages/SocialMedia';

export const RouterInit = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/articles" element={<Articles></Articles>}></Route>
        <Route path="/experience" element={<Experience></Experience>}></Route>
        <Route path="/social-media" element={<SocialMedia></SocialMedia>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
