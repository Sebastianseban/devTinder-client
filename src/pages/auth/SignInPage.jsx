import { Github, Mail } from "lucide-react";
import React, { useState } from "react";
import SocialButton from "../../components/ui/SocialButton";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";
import PasswordInput from "../../components/ui/PasswordInput";
import { useNavigate } from "react-router";
import { useGoogleAuth, useLogin } from "../../hooks/useAuth";
import { useGoogleLogin } from "@react-oauth/google";


const SignInPage = () => {
   const  googleAuthMutation = useGoogleAuth()

  const navigate = useNavigate()
  const { mutate } = useLogin();
  const [ formData, setFormData ] = useState({
    emailId: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    mutate(formData,{
      onSuccess:()=> {
        navigate("/feed")
      }
    });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      googleAuthMutation.mutate(codeResponse.code, {
        onSuccess: (user) => {
          if (user.isProfileComplete) navigate("/feed");
          else navigate("/auth/complete-profile");
        },
      });
    },
    onError: (error) => console.error("Google login failed:", error),
    flow: "auth-code",
  });
  
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
            <p className="text-slate-400 text-lg">
              Sign in to continue your developer journey
            </p>
          </div>

          <div className="space-y-3 mb-6">
            <SocialButton    icon={Github}>Continue with GitHub</SocialButton>
            <SocialButton onClick={() => googleLogin()} icon={Mail}>Continue with Google</SocialButton>
          </div>

          <Divider text="or continue with email" />

          <form onSubmit={handlesubmit}>
            <Input
              label="Email Address"
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleOnChange}
              placeholder="your.email@example.com"
            />

            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              placeholder="Enter your password"
            />

            <div className="flex justify-end mb-6">
              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                Forgot password?
              </button>
            </div>

            <Button type="submit">Sign In</Button>
          </form>

          <p className="text-center text-slate-400 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/auth/signup")}
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
