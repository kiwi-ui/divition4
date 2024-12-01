import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { Suspense, Lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Loading from './pages/Loading/index.jsx';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import Cover from './pages/Cover/index.jsx';
import './App.css'
createRoot(document.getElementById('root')).render(
  <Suspense fallback={<Loading />}>
  <BrowserRouter>
    <Routes>
        <Route path='/:name' element={ <Cover /> }/>
        <Route path='/:name/main' element={ <App /> }/>
    </Routes>
  </BrowserRouter>
</Suspense>
)
