import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ErrorUrlRoute from './components/Routes/ErrorRoute/ErrorUrlRoute';
import WelcomeRoute from './components/Routes/WelcomeRoute';
import RegistrationRoute from './components/Routes/RegistrationRoute/RegistrationRoute';
import LoginRoute from './components/Routes/LoginRoute/LoginRoute';
import TodosRoute from './components/Routes/TodosRoute/TodosRoute';
import MainRoute from './components/Routes/MainRoute/MainRoute';
import ErrorNetworkRoute from './components/Routes/ErrorRoute/ErrorNetworkRoute';

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
                <Route path='*' element={<ErrorUrlRoute />} />
                <Route path='/network' element={<ErrorNetworkRoute />} />
            </Routes>
        </Router>
    );
}
