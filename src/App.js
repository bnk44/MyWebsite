import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Redirect,
  Navigate,
} from "react-router-dom";

import Profile from "./Profile";
import Register from "./Register";
import VerifyEmail from "./VerifyEmail";
import Login from "./Login";
import { useState, useEffect } from "react";
import { AuthProvider } from "./AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import PrivateRoute from "./PrivateRoute";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Other from "./Other";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <div>
      <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
        <NavBar> </NavBar>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              exact
              path="/Home"
              element={<Home />}
            />
            <Route
              exact
              path="/About"
              element={<About />}
            />
            <Route
              exact
              path="/Other"
              element={<Other />}
            />

            <Route
              path="/login"
              element={
                !currentUser?.emailVerified ? (
                  <Login />
                ) : (
                  <Navigate
                    to="/"
                    replace
                  />
                )
              }
            />
            <Route
              path="/register"
              element={
                !currentUser?.emailVerified ? (
                  <Register />
                ) : (
                  <Navigate
                    to="/"
                    replace
                  />
                )
              }
            />
            <Route
              path="/verify-email"
              element={<VerifyEmail />}
            />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
