import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate,Switch, Navigate } from 'react-router-dom';
import './Login.css';
import Main from './Main';
function Login()
{
    const nav = useNavigate();
    const mainPage = () =>
    {
        nav("/Main")
    }
    return(
        <button onClick={mainPage}>Click here to Continue</button>
    );
}
export default Login;