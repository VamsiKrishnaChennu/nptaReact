import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useValidation } from "../hooks/useValidateHook";
function Signup() {
   const navigate = useNavigate()
   const [state, setState] = useState({ username: '', email: '', pwd: '' })
   const [error, setError] = useState('')
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

      try {
         const res = await axios.post("http://localhost:8080/register", state)
         console.log(res.data)
         navigate("/")
      } catch (err) {
         setError(err.response?.data?.message || "Registration failed")
      }
   }

   return (
      <div className="">
         <form onSubmit={handleSubmit} noValidate>
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="mb-3">
               <label className="form-label">Username</label>
               <input
                  type="text"
                  name="username"
                  value={state.username}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter username"
               />
               {errors.username && <div className="text-danger small">{errors.username}</div>}
            </div>

            <div className="mb-3">
               <label className="form-label">Email</label>
               <input
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
               />
               {errors.email && <div className="text-danger small">{errors.email}</div>}
            </div>

            <div className="mb-3">
               <label className="form-label">Password</label>
               <input
                  type="password"
                  name="pwd"
                  value={state.pwd}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your password"
               />
               {errors.pwd && <div className="text-danger small">{errors.pwd}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">Sign up</button>
         </form>
      </div>
   )
}

export default Signup