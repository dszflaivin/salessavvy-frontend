import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./assets/styles.css";

// export default function LoginPage() {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState(null);
//     const navigate = useNavigate();

//     const handleSignUp = async (e) => {
//         e.preventDefault();
//         setError(null);

//         if(!username.trim() || !password.trim()) {
//           setError("Username and password are required");
//           return;
//         }
//         try {
//             const response = await fetch("http://localhost:9090/api/auth/login", {
//                 method:"POST",
//                 headers: {
//                     "Content-Type":"application/json",
//                 }, 
//                 credentials: "include",
//                 body:JSON.stringify({username, password}),
//             });

//             const data = await response.json();

//             if(response.ok) {

//               if(data.role === "CUSTOMER") {
//                 navigate("/customerhome");
//               } else {
//                 navigate("/")
//               }
//             } else {
//               const errorMessage = data.error || "Something went wrong. Please try again.";
//               throw new Error(errorMessage);
//             }
//         } catch (err) {
//             setError(err.message || "unexpected error occured");
//         }
//     };

//     return (
//       <div className="page-layout">
//         <div className="page-container">
//             <div className="form-container">
//                 <h1 className="form-title">Login</h1>
//                 {error && <p className="error-message">{error}</p>}
//         <form onSubmit={handleSignUp} className="form-content">
//           <div className="form-group">
//             <label htmlFor="username" className="form-label">Username</label>
//             <input
//               id="username"
//               type="text"
//               placeholder="Enter your username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//               className="form-input"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="form-input"
//             />
//           </div>
//           <button type="submit" className="form-button">Sign In</button>
//         </form>
//         <div className="form-footer">
//           <a href="/register" className="form-link">New user? Register here</a>
//         </div>
//             </div>
//         </div>
//         </div>
//     );
// }


export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
      e.preventDefault();
      setError(null);

      if(!username.trim() || !password.trim()) {
        setError("Username and password are required");
        return;
      }

      try {
          const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              }, 
              credentials: "include",
              body: JSON.stringify({ username, password }),
          });

          const data = await response.json();

          if(response.ok) {
              if(data.role === "CUSTOMER") {
                  navigate("/customerhome");
              } else {
                  navigate("/");
              }
          } else {
              const errorMessage = data.error || "Something went wrong. Please try again.";
              throw new Error(errorMessage);
          }
      } catch (err) {
          setError(err.message || "Unexpected error occurred");
      }
  };

  return (
      <div className="login-container">
          {/* Left Side - App Name */}
          <div className="app-info">
              <h1 className="app-title">SalesSavvy</h1>
              <p className="app-description">Sales made easy and efficient.</p>
          </div>

          {/* Right Side - Login Form */}
          <div className="form-container">
              <h1 className="form-title">Login</h1>
              {error && <p className="error-message">{error}</p>}
              <form onSubmit={handleSignUp} className="form-content">
                  <div className="form-group">
                      <label htmlFor="username" className="form-label">Username</label>
                      <input
                          id="username"
                          type="text"
                          placeholder="Enter your username"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          required
                          className="form-input"
                      />
                  </div>
                  <div className="form-group">
                      <label htmlFor="password" className="form-label">Password</label>
                      <input
                          id="password"
                          type="password"
                          placeholder="Enter your password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          className="form-input"
                      />
                  </div>
                  <button type="submit" className="form-button">Sign In</button>
              </form>
              <div className="form-footer">
                  <a href="/register" className="form-link">New user? Register here</a>
              </div>
          </div>
      </div>
  );
}
