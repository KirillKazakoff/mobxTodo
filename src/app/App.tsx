import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorRoute from './components/Routes/ErrorRoute/ErrorRoute';
import WelcomeRoute from './components/Routes/WelcomeRoute';
import RegistrationRoute from './components/Routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from './components/Routes/LoginRoute/LoginRoute';
import TodosRoute from './components/Routes/TodosRoute/TodosRoute';
import MainRoute from './components/Routes/MainRoute';
import ErrorConnectionRoute from './components/Routes/ErrorRoute/ErrorConnectionRoute';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<MainRoute />}>
                    <Route path='/' element={<WelcomeRoute />} />

                    <Route path='/registration' element={<RegistrationRoute />} />
                    <Route path='/login' element={<LoginRoute />} />
                    <Route path='/todos' element={<TodosRoute />} />
                </Route>
                <Route path='*' element={<ErrorRoute />} />
                <Route path='/disconnect' element={<ErrorConnectionRoute />} />
            </Routes>
        </Router>
    );
}
