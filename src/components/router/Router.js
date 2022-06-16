import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home'
import Recipe from '../../pages/recipe/recipe';
import Calendar from '../../pages/calendar/calendar';
import Cookbook from '../../pages/cookbook/cookbook';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Router = () => (
  <BrowserRouter>
    <Header />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/calendar" element={<Calendar />} />
      <Route exact path="/recipe" element={<Recipe />} />
      <Route exact path="/cookbook" element={<Cookbook />} />
    </Routes>

    <Footer />
  </BrowserRouter>
)

export default Router;