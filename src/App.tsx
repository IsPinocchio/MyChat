import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import router from './routers'
import './App.scss';

function App() {
  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
