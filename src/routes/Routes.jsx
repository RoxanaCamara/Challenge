import React from 'react'
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import { HistoryPage } from '../module/History/History';
import { Home } from '../module/Home/Home';
import { Points } from '../module/Points/Points';

export const RoutesPage = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/menu" element={<Home />} />
          <Route path="/points" element={<Points />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
    </BrowserRouter>
  )
}
