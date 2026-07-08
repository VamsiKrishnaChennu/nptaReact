import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useValidation } from "../hooks/useValidateHook";

function Login({ compact = false, onSwitchToSignup }) {
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
      if (Object.keys(validationErrors).length > 0) return;
      try {
         const res = await axios.post("http://localhost:8080/login", state)
         console.log(res.data)
         navigate("/mode")
      } catch (err) {
         setError(err.response?.data?.message || "Login failed")
      }
   }

   return (
      <div className={compact ? "w-100" : "min-vh-100 bg-light d-flex align-items-center justify-content-center"}>
         <div style={{ width: "100%", maxWidth: "420px" }}>
            {!compact && <h4 className="card-title mb-4 text-center">LOGIN</h4>}

            <form onSubmit={handleSubmit} noValidate>
               {error && <div className="alert alert-danger">{error}</div>}

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

               <div className="mb-3">
                  <p className="text-muted small">
                     New user?{' '}
                     <button
                        type="button"
                        className="btn btn-link p-0 text-primary text-decoration-none"
                        onClick={onSwitchToSignup}
                     >
                        Register
                     </button>
                  </p>
               </div>

               <button type="submit" className="btn btn-primary w-100">
                  Login
               </button>
            </form>
         </div>
      </div>
   )
}

export default Login