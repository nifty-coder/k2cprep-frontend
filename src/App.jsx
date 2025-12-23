import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Vision from './pages/Vision';
import WhyK2C from './pages/WhyK2C';
import Programs from './pages/Programs';
import ParentPartnership from './pages/ParentPartnership';
import Contact from './pages/Contact';

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
          <Route path="vision" element={<Vision />} />
          <Route path="why-k2c" element={<WhyK2C />} />
          <Route path="programs" element={<Programs />} />
          <Route path="parents" element={<ParentPartnership />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
