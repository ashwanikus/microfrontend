import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load the remote components
const HomeApp = React.lazy(() => import('home/HomeApp'));
const ProductApp = React.lazy(() => import('product/ProductApp'));

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/home" element={<HomeApp />} />
          <Route path="/product" element={<ProductApp />} />
          <Route path="/" element={<div>Welcome to Shell</div>} />
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
