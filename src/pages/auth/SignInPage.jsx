
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useGoogleLogin } from "@react-oauth/google";
import { Github, Mail } from "lucide-react";
import toast from "react-hot-toast";
import SocialButton from "../../components/ui/SocialButton";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import Divider from "../../components/ui/Divider";
import PasswordInput from "../../components/ui/PasswordInput";
import { useGoogleAuth, useLogin } from "../../hooks/useAuth";
import { loginSchema } from "../../utils/validationSchemas";

const SignInPage = () => {
  const navigate = useNavigate();
  const loginMutation = useLogin();
  const googleAuthMutation = useGoogleAuth();

  const GITHUB_CLIENT_ID = import.meta.env.VITE_GITHUB_CLIENT_ID;
  const REDIRECT_URI = import.meta.env.VITE_REDIRECT_URI;

  const [formData, setFormData] = useState({
    emailId: "",
    password: "",
  });

  const handleOnChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      const firstError =
        result.error?.issues?.[0]?.message ||
        result.error?.errors?.[0]?.message ||
        "Invalid credentials";
      toast.error(firstError);
      return;
    }

    const toastId = toast

    loginMutation.mutate(formData, {
      onSuccess: () => {
        toast.dismiss(toastId);
        toast.success("Welcome back!");
        navigate("/feed");
      },
      onError: (error) => {
        toast.dismiss(toastId);
        toast.error(
          error?.response?.data?.message || "Login failed. Please try again."
        );
        console.error("Login failed:", error);
      },
    });
  };

  const googleLogin = useGoogleLogin({
    onSuccess: (codeResponse) => {
      googleAuthMutation.mutate(codeResponse.code, {
        onSuccess: (user) => {
          if (user.isProfileComplete) {
            toast.success("Signed in with Google!");
            navigate("/feed");
          } else {
            navigate("/auth/complete-profile");
          }
        },
        onError: (error) => {
          toast.error("Google authentication failed");
          console.error("Google auth failed:", error);
        },
      });
    },
    onError: (error) => {
      toast.error("Google login failed");
      console.error("Google login failed:", error);
    },
    flow: "auth-code",
  });

  const handleGithubLogin = () => {
    const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=user:email`;
    window.location.href = githubAuthUrl;
  };

  const isLoading = loginMutation.isPending || googleAuthMutation.isPending;

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
            <SocialButton
              onClick={handleGithubLogin}
              icon={Github}
              disabled={isLoading}
            >
              Continue with GitHub
            </SocialButton>
            <SocialButton
              onClick={googleLogin}
              icon={Mail}
              disabled={isLoading}
            >
              {googleAuthMutation.isPending
                ? "Loading..."
                : "Continue with Google"}
            </SocialButton>
          </div>

          <Divider text="or continue with email" />

          <form onSubmit={handleSubmit}>
            <Input
              label="Email Address"
              type="email"
              name="emailId"
              value={formData.emailId}
              onChange={handleOnChange}
              placeholder="your.email@example.com"
              disabled={isLoading}
              required
            />

            <PasswordInput
              label="Password"
              name="password"
              value={formData.password}
              onChange={handleOnChange}
              placeholder="Enter your password"
              disabled={isLoading}
              required
            />

            <div className="flex justify-end mb-6">
              <button
                type="button"
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors disabled:opacity-50"
                disabled={isLoading}
              >
                Forgot password?
              </button>
            </div>

            <Button type="submit" disabled={isLoading}>
              {loginMutation.isPending ? "Signing In..." : "Sign In"}
            </Button>

            {loginMutation.isError && (
              <p className="text-red-400 text-sm mt-3">
                {loginMutation.error?.response?.data?.message ||
                  "Login failed. Please try again."}
              </p>
            )}
          </form>

          <p className="text-center text-slate-400 mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => navigate("/auth/signup")}
              className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors disabled:opacity-50"
              disabled={isLoading}
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
