import React from "react"
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}){

    const user = localStorage.getItem('user');

    //If user dnot exists
    if(!user){
        return <Navigate to="/login" replace />
    }

    //Return protected page 
    return children;
}