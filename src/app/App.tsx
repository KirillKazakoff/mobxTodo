import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorRoute from './components/Routes/ErrorRoute';
import WelcomeRoute from './components/Routes/WelcomeRoute';
import RegistrationRoute from './components/Routes/RegistrationRoute';
import LoginRoute from './components/Routes/LoginRoute';
import TodosRoute from './components/Routes/TodosRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/welcome' element={<WelcomeRoute />} />
                <Route path='/registration' element={<RegistrationRoute />} />
                <Route path='/login' element={<LoginRoute />} />
                <Route path='/todos' element={<TodosRoute />} />
                <Route path='*' element={<ErrorRoute />} />
            </Routes>
        </Router>
    );
}
