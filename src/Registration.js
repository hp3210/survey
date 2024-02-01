import axios, { Axios } from "axios";
import { useState } from "react";


const Registration =()=>{
    const [formData, setformData] = useState({
        userName:'',
        email:'',
        password:''
    });

    const handleChange = (e)=>{
        setformData({...formData, [e.target.name]:e.target.value});
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(e.target);
        axios
        .post('http://localhost:3005/api/registeration', formData)
        .then(response => {
          console.log('Form submission response:', response.data);
          // Reset the form after successful submission
          setformData({
            userName: '',
            email: '',
            password: ''
          });
        })
        .catch(error => {
          console.error('Form submission error:', error);
        });
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="userName" value={formData.userName} onChange={handleChange}></input>
                <input type="text" name="email" value={formData.email} onChange={handleChange}></input>
                <input type="text" name="password" value={formData.password} onChange={handleChange}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}


export default Registration;