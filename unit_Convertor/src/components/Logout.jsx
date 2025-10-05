import  React  from "./react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

export default function Logout(){
    const navigate = useNavigate();

    const handleLogout = ()=>{
        try{
            const token = localStorage.getItem('token');

            const res = axios.post('http://localhost:8000/api/logout',{},{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            });

            localStorage.removeItem('user');
            localStorage.removeItem('token');

            navigate('/login')
        }catch(error){
            console.log(error);
            
        }
    }


    return (
        <>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>

        </>
    )
}
