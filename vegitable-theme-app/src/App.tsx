import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Listpage from './pages/Listpage';

export function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/list" element={<Listpage />} />
            </Routes>
        </BrowserRouter>
    );
}
