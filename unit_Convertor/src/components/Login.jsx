import React from "react";
import { useState, useId } from "react";
import axios from "axios";
import { Navigate, useNavigate } from 'react-router-dom';

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState({});

    const navigate = useNavigate();

    const HandleLogin = async (e) =>{
        e.preventDefault();

        setEmail(email);
        setPassword(password);

        let errors = {};

        if(!email.trim()) errors.email = "Email is empty";
        if(!password.trim()) errors.password = "Password is empty";

        if(Object.keys(errors).length > 0){
            setError(errors);
            return;
        }
        
        try{
            const res = await axios.post('http://localhost:8000/api/login',{
                'email' : email,
                'password' : password
            });

            console.log(res.data);
            
            //If login successful
            if(res.data.success){
                localStorage.setItem('user',JSON.stringify(res.data.user))
                localStorage.setItem('token',res.data.token);
                
                //Redirect to home page
                navigate('/home');
            }
            
        }catch(error){
            
            if(error.response && error.response.status !== 200){
                errors.invalid_response = "Invalid Details";
                setError(errors);
            }
        }
    }

    const emailId = useId();
    const passwordId = useId();


    return (
        <>
        <div className="container">
                <div className="form_container  ">

                   
                    <div className="form_box p-3 w-100 bg-white rounded shadow" >
                       
                        <div className="form_title">
                            <h3 className="text-center text-success">Login</h3>
                        </div>

                        {error.invalid_response && (
                        <div className="alert alert-danger">
                            {error.invalid_response}
                        </div>

                        )}

                        <form action="" method="post" onSubmit={HandleLogin}>
                            

                            <div className="mb-3 text-start">
                                <label htmlFor={emailId} className="form-label fw-bold">Email</label>
                                <input type="text" name="" id={emailId} className="form-control" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value) } />

                                {/* Show emaail error message  */}
                                { error.email && (
                                    <span className="text-danger my-2 ">{error.email}</span>
                                )}
                            </div>

                            <div className="mb-3 text-start">
                                <label htmlFor={passwordId} className="form-label fw-bold">Password</label>
                                <input type="password" name="" id={passwordId} className="form-control" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />

                                {/* Show password error message  */}
                                { error.password && (
                                    <span className="text-danger my-2 ">{error.password}</span>
                                )}
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-success">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}