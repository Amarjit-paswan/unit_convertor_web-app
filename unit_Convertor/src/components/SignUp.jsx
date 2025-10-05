import { useEffect, useId } from "react";
import { Link} from 'react-router-dom';
import { useState } from "react"
import axios from "axios";

export default function SignUp(){

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState({});
    const [message, setMessage] = useState('');




    const HandleSignUp = async (e)=>{
        e.preventDefault();

        let errors = {};

        if(!username.trim()){
            errors.username = 'Username is empty';
        }
        
        if(!password.trim()){
            errors.password = 'Password is empty';
        }else if(password.length < 6){
            errors.password = "Password must be 6 characters";
        }
        
        if(!email.trim()){
            errors.email = 'Email is empty';
        }else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
            errors.email = "Email format is invalid";
        }
        

        // if any error exists 
        if(Object.keys(errors).length > 0){
            setError(errors);
            return;
        }


        try{
            //Sending request to backend
            const res = await axios.post('http://localhost:8000/api/signup',{
                'username' : username,
                'email' : email,
                'password' : password
            });

            if(res.data.success){
                setMessage(res.data.message);
                setUsername('');
                setEmail('');
                setPassword('');
                setError({});
            }

        }catch(error){
            console.error(error);
        }
       
        
      
        
    }



    const userId = useId();
    const emailId = useId();
    const passwordId = useId();

    return (
            <div className="container">
                <div className="form_container  ">

                   
                    <div className="form_box p-3 w-100 bg-white rounded shadow" >
                         {/* Success message  */}
                            {message && (
                            <div className="heading alert alert-success my-2 ">
                                {message}
                            </div>
                            )}
                        <div className="form_title">
                            <h3 className="text-center text-danger">SignUp</h3>
                        </div>

                        <form action="" method="post" onSubmit={HandleSignUp}>
                            <div className="mb-3 text-start">
                                <label htmlFor={userId} className="form-label fw-bold ">Username</label>
                                <input type="text" name="" id={userId} className="form-control" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)} />

                                {/* Show username error message  */}
                                { error.username && (
                                    <span className="text-danger my-2 ">{error.username}</span>
                                )}

                            </div>

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

                                <Link to="/login">
                                    <div className="d-grid">

                                    <button className="btn btn-warning mt-2">Login</button>
                                    </div>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        
    )
}