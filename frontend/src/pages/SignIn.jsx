import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { InputBox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    // Username validation
    if (!username.includes("@gmail.com")) {
      alert("Please enter a valid Gmail address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      alert("Password should be at least 6 characters long.");
      return;
    }

    // Perform sign in
    try {
      const res = await axios.post("http://localhost:3000/api/v1/user/signin", {
        username,
        password,
      });
      
      // Store token in localStorage
      localStorage.setItem("token", "Bearer " + res.data.token);
      
      // Navigate to dashboard after successful sign in
      navigate('/dashboard');
    } catch (error) {
      console.error("Sign in error:", error);
      // Handle sign in error
      alert("Sign in failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="bg-slate-800 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="bg-white rounded-lg p-5 px-10 text-center">
          <Heading label="SignIn" />
          <SubHeading label="Enter your information to Login" />
          <div className="py-3">
            <div className="py-2">
              <InputBox
                title="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your Gmail address"
              />
            </div>
            <InputBox
              title="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
            <Button onClick={handleSignIn} label="Sign In" />
            <BottomWarning
              label="Don't have an account?"
              buttonText="SignUp"
              to="/signup"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
