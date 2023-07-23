// import React, { useState, useRef, useEffect } from "react";
// // import { Form, Button, Card, Container, Alert} from "react-bootstrap";
// import { Link, useNavigate } from "react-router-dom";
// import { useAuth } from "../context/ContextProvider";
// import "./Signup.css";

// const Login = () => {
//     const emailRef = useRef()
//     const passwordRef = useRef()
//     const { login } = useAuth()
//     const [error, setError] = useState("")
//     const [loading, setLoading] = useState(false)
//     const Navigate = useNavigate()

//    async function handleSubmit(e) {
//         e.preventDefault()

//         try{
//             setError("")
//             setLoading(true)
//            await login(emailRef.current.value, passwordRef.current.value)
//            Navigate.push("/")
//         } catch {
//             setError("Failed to log in")
//         }
//         setLoading(false)
        
//     }

//     return(
//         <>
//         <div className="d-flex align-item-center justify-content-center mt-5"
//         style={{ display: "flex", alignItem: "center", justifyContent: "center", marginTop: "5px", minHeight: "100vh"}}
//         >
//         <div className="w-100" style={{ width: "100%", maxWidth: "400px"}}>
//             <div>
//                 <span>
//                     <h2 style={{ textAlign: "center", marginBottom: "5px" }} className="text-center mb-5">Log In Page</h2>
//                     {error && alert(error)}
//                     <form onSubmit={handleSubmit}>
//                         <htmlFor id="email">
//                             <label>Email</label>
//                             <input type="email" ref={emailRef} required placeholder="example@gmail.com"/>
//                         </htmlFor>
//                         <htmlFor id="password">
//                             <label>Password</label>
//                             <input type="password" ref={passwordRef} required placeholder="atlist 7 charecter"/>
//                         </htmlFor>
//                         <button disabled={loading} className="yellow-btn" type="submit">Log In</button>
//                     </form>
//                     <div className="w-100 text-center mt-3">
//                         <Link to="/forgoat-Password">Forgoat Password?</Link>
//                     </div>
//                 </span>
//             </div>
//             <div className="w-100 text-center mt-4">
//                 Need an account? <Link to="/signup">Sign Up</Link>
//             </div>
//             </div>
//             </div>
//         </>
//     );
// };
// export default Login;