import React,{useState} from 'react';
import Layout from '../../components/Layout/Layout';
import toast  from 'react-hot-toast';
import axios from 'axios';
import "../../style/Authstyle.css";
import {useNavigate} from 'react-router-dom';

const Login = () => {
   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const navigate = useNavigate();
//form function
const handleSubmit = async (e) => {
    e.preventDefault()
    try{
        const res = await axios.post('/api/v1/auth/login', 
        {
          
            email,
           
            password,
          
        });
        if(res.data.success) {
            toast.success(res.data.message);
            navigate("/");
        } else{
          toast.error(res.data.message)
        }
    } catch (error) {
        console.log(error);
        toast.error('Something wrong');
    }
};
  return (
    <Layout title="Login - Emart">
      <div className='form-container'>
        <form onSubmit={handleSubmit}>
        
  <div className="mb-3">
    
    <input 
    type="email" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1"
    placeholder='Enter your Email' 
    required
    />
   
   </div>
  <div className="mb-3">
    
    <input 
        type="password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control" 
        id="exampleInputPassword1" 
        placeholder='Enter your Password' 
        required
        />
    </div>
        <button type="submit" className="btn btn-primary">Login</button>
    </form>

    </div>
    </Layout>
  );
}

export default Login;
