import { useState } from 'react'
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import SignUp from './components/signUp'
import Home from './components/Home'
import './App.css';
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
          
          }></Route>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
  )
   
}

export default App
