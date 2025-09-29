import { Github, Mail } from "lucide-react";
import React from "react";
import SocialButton from "../../components/ui/SocialButton";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";
import PasswordInput from "../../components/ui/PasswordInput";
import { useNavigate } from "react-router";

const SignInPage = () => {

    const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-lg">Sign in to continue your developer journey</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 p-8">
          <div className="space-y-3 mb-6">
            <SocialButton icon={Github}>Continue with GitHub</SocialButton>
            <SocialButton icon={Mail}>Continue with Google</SocialButton>
          </div>

          <Divider text="or continue with email" />

          <form >
            <Input
              label="Email Address"
              type="email"
              name="email"
             
              placeholder="your.email@example.com"
            />

            <PasswordInput
              label="Password"
              name="password"
          
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
            Don't have an account?{' '}
            <button
  onClick={() => navigate('/auth/signup')}
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
