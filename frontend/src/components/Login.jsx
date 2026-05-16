import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useValidation } from "../hooks/useValidateHook";

function Login() {
   const navigate = useNavigate();
   const [state, setState] = useState({ email: '', pwd: '' })
   const [error, setError] = useState('')
   const { errors, validate } = useValidation()

   const handleChange = (e) => {
      const { name, value } = e.target
      setState((PrevValue) => ({
         ...PrevValue,
         [name]: value
      }))
   }

   const handleSubmit = async (e) => {
      e.preventDefault();
      const validationErrors = validate(state);
      console.log(validationErrors);
      if (Object.keys(validationErrors).length > 0) return;
      await axios.post("http://localhost:8080/login", state)
         .then((res) => {
            console.log(res.data)
            navigate("/mode")
         })
         .catch((err) => setError(err.response?.data?.message || "Login failed"))
   }

   return (
      <div className="">
         <form onSubmit={handleSubmit}>
            <label>Email:</label>
            <input type="email" name="email" value={state.email} onChange={handleChange} /> <br />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            <label>Password:</label>
            <input type="password" name="pwd" value={state.pwd} onChange={handleChange} /> <br />
            {errors.pwd && <p style={{ color: "red" }}>{errors.pwd}</p>}
            <button type="submit">Login</button>
         </form>
         <div>
            <p>New user <a href="/signup">Register</a></p>
         </div>
      </div>
   )
}

export default Login