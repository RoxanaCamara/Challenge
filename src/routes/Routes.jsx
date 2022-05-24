import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from '../App';
import { HistoryPage } from '../module/History';

export const RoutesPage = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<App />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
    </BrowserRouter>
  )
}
