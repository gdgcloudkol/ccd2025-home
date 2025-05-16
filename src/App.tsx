import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';
import CodeOfConduct from './pages/CodeOfConduct';
import { ThemeProvider } from './context/ThemeContext';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Faq from './pages/resources/Faq';
import Team from './pages/Team';

const App: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/speakers" element={<NotFoundPage />} />
          <Route path="/events" element={<NotFoundPage />} />
          <Route path="/schedule" element={<NotFoundPage />} />
          <Route path="/team" element={<Team />} />
          <Route path="/register" element={<NotFoundPage />} />
          <Route path="/login" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/code-of-conduct" element={<CodeOfConduct />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/resources/faq" element={<Faq />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
