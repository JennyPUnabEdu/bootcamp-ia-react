import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import Module3 from './pages/Module3';
import Module4 from './pages/Module4';

/**
 * App
 *
 * Root application component and routing entry point for the
 * "Bootcamp IA – Interactive Presentation Platform".
 *
 * This file is intentionally lightweight and focused only on
 * route definition. Each route points to a high-level page
 * that internally renders its content using a modular,
 * data-driven Slide Engine architecture.
 *
 * Tech stack:
 * - React (Vite)
 * - React Router v6
 * - Tailwind CSS
 *
 * A fallback route is included to gracefully handle unknown URLs.
 */
function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/modulo1" element={<Module1 />} />
        <Route path="/modulo2" element={<Module2 />} />
        <Route path="/modulo3" element={<Module3 />} />
        <Route path="/modulo4" element={<Module4 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>

  );
}

export default App;
