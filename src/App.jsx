import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';

import WhyK2C from './pages/WhyK2C';
import Programs from './pages/Programs';
import Contact from './pages/Contact';
import SATRoadmap from './pages/SATRoadmap';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="why-k2c" element={<WhyK2C />} />
          <Route path="programs" element={<Programs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sat-roadmap" element={<SATRoadmap />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
