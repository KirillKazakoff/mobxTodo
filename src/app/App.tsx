import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorRoute from './components/Routes/ErrorRoute';
import MainRoute from './components/Routes/MainRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainRoute />} />
                <Route path='*' element={<ErrorRoute />} />
            </Routes>
        </Router>
    );
}
