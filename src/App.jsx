import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DynamicPage from './components/DynamicPage';

// Import data directly
import contentData from './data/content.json';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(contentData);
  }, []);

  if (!data) return <div className="flex h-screen items-center justify-center">Loading...</div>;

  return (
    <Router>
      <Layout data={data}>
        <Routes>
          <Route path="/" element={<DynamicPage pageData={data.pages.home} />} />
          <Route path="/hire-skilled-workers" element={<DynamicPage pageData={data.pages['hire-skilled-workers']} />} />
          <Route path="/job-openings" element={<DynamicPage pageData={data.pages['job-openings']} />} />

          {/* Fallback for other pages if we add them to JSON later without updating App.jsx explicitly? 
              For now, specific routes are safer. */}

          <Route path="*" element={<div className="pt-40 text-center pb-20"><h1 className="text-2xl font-bold">Page Not Found</h1><p>The page you are looking for does not exist.</p></div>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
