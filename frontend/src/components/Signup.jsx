import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useValidation } from "../hooks/useValidateHook";
function Signup() {
   const navigate = useNavigate()
   const [state, setState] = useState({ username: '', email: '', pwd: '' })
   const { errors, validate } = useValidation()

   const handleChange = (e) => {
      const { name, value } = e.target
      setState((pervValue) => ({
         ...pervValue,
         [name]: value
      }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = validate(state);
      if (Object.keys(validationErrors).length > 0) return;

      await axios.post("http://localhost:8080/register", state)
         .then((res) => {
            console.log(res.data)
            navigate("/");
         })
         .catch((err) => setError(err.response?.data?.message || "Login failed"))
   }

   return (
      <div className="">
         <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={state.username} onChange={handleChange} /> <br />
            {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            <label>Email:</label>
            <input type="email" name="email" value={state.email} onChange={handleChange} /> <br />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <label>Password:</label>
            <input type="password" name="pwd" value={state.pwd} onChange={handleChange} /> <br />
            {errors.pwd && <p style={{ color: "red" }}>{errors.pwd}</p>}
            <button type="submit">Sign up</button>
         </form>
      </div>
   )
}

export default Signup