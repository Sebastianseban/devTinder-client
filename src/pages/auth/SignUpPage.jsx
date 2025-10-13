
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import { Github, Mail } from "lucide-react";
import SocialButton from "../../components/ui/SocialButton";
import Divider from "../../components/ui/Divider";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Button from "../../components/ui/Button";
import { useGoogleAuth, useRegister } from "../../hooks/useAuth";

const SignUpPage = () => {
  const navigate = useNavigate();
  const registerMutation = useRegister();
  const googleAuthMutation = useGoogleAuth();

  const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID
const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    emailId: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    registerMutation.mutate(formData, {
      onSuccess: () => {
        navigate("/auth/complete-profile");
      },
      onError: (error) => {
        console.error("Registration failed:", error);
      },
    });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      googleAuthMutation.mutate(codeResponse.code, {
        onSuccess: (user) => {
          if (user.isProfileComplete) {
            navigate("/feed");
          } else {
            navigate("/auth/complete-profile");
          }
        },
        onError: (error) => {
          console.error("Google auth failed:", error);
        },
      });
    },
    onError: (error) => {
      console.error("Google login failed:", error);
    },
    flow: "auth-code",
  });

  const handleGithubLogin = () => {
  // Redirects user to GitHub's login screen
  const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user:email`;
  window.location.href = githubAuthUrl;
};

  const isLoading = registerMutation.isPending || googleAuthMutation.isPending;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0A0F] via-[#1A1A2E] to-[#16213E] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 p-5 shadow-lg">
          {/* Header */}
          <div className="text-center mb-4">
            <h1 className="text-2xl font-bold text-white bg-gradient-to-r from-white via-[#00D4FF] to-[#7B68EE] bg-clip-text text-transparent">
              Sign Up
            </h1>
            <p className="text-white/60 text-sm">Create your account</p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-2 mb-4">
            <SocialButton
              icon={Github}
              onClick={() => handleGithubLogin()}
              disabled={isLoading}
              className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white text-xs py-2"
            >
              GitHub
            </SocialButton>
            <SocialButton
              icon={Mail}
              onClick={() => googleLogin()}
              disabled={isLoading}
              className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white text-xs py-2"
            >
              {googleAuthMutation.isPending ? "Loading..." : "Google"}
            </SocialButton>
          </div>

          <Divider text="or" />

          <form onSubmit={handleSubmit}>
            {/* Name Fields */}
            <div className="grid grid-cols-2 gap-2 mb-2">
              <Input
                label="First Name"
                name="firstName"
                placeholder="sebastian"
                value={formData.firstName}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="andrews"
                value={formData.lastName}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            {/* Username */}
            <Input
              label="Username"
              name="username"
              placeholder="sebastianseban"
              value={formData.username}
              onChange={handleChange}
              disabled={isLoading}
              required
            />
            <p className="text-white/40 text-xs -mt-1 mb-2">
              3-30 chars, letters & numbers only
            </p>

            {/* Email */}
            <Input
              label="Email"
              type="email"
              name="emailId"
              placeholder="john@example.com"
              value={formData.emailId}
              onChange={handleChange}
              disabled={isLoading}
              required
            />

            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-2">
              <PasswordInput
                label="Password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
              <PasswordInput
                label="Confirm"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={isLoading}
                required
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isLoading}>
              {registerMutation.isPending ? "Signing Up..." : "Continue"}
            </Button>

            {/* Error Display */}
            {registerMutation.isError && (
              <p className="text-red-400 text-sm mt-2">
                {registerMutation.error?.response?.data?.message ||
                  "Something went wrong"}
              </p>
            )}
            {googleAuthMutation.isError && (
              <p className="text-red-400 text-sm mt-2">
                {googleAuthMutation.error?.response?.data?.message ||
                  "Google authentication failed"}
              </p>
            )}
          </form>

          {/* Sign In Link */}
          <p className="text-center text-white/60 mt-4 text-xs">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/auth/signin")}
              className="text-[#00D4FF] hover:text-[#00C4EB] font-medium transition-colors duration-300"
              disabled={isLoading}
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
