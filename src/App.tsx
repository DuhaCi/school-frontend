import React from 'react';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ThemesPage from './pages/ThemesPage';
import ThemePage from './pages/ThemePage';
import PracticePage from './pages/PracticePage';
import { QuestsPage } from './pages/QuestsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/section/:header/:id" element={<ThemesPage/>}/>
        <Route path="/:header/:description" element={<ThemePage/>}/>
        <Route path="/practice" element={<PracticePage/>}/>
        <Route path="/practice/:header" element={<QuestsPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
