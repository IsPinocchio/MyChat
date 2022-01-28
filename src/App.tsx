import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import router from './routers'
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
        {
          router.map((item, i) => {
            return (
              <Route key={i} path={item.path} element={
                <Suspense fallback={
                  <div>加载中...</div>
                }>
                  <item.component></item.component>
                </Suspense>
              } />
            )
          })
        }
      </Routes>
    </BrowserRouter>
  );
}

export default App;
