
import React, { useState } from "react";
import { useNavigate } from "react-router";
import SocialButton from "../../components/ui/SocialButton";
import { Github, Mail } from "lucide-react";
import Divider from "../../components/ui/Divider";
import Input from "../../components/ui/Input";
import PasswordInput from "../../components/ui/PasswordInput";
import Button from "../../components/ui/Button";
import { useRegister } from "../../hooks/useAuth";


const SignUpPage = () => {
  const navigate = useNavigate();
  const { mutate, isLoading, isError, error } = useRegister();

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
    mutate(formData, {
      onSuccess: () => {
        navigate("/auth/complete-profile");
      },
    });
  };

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
              className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white text-xs py-2"
            >
              GitHub
            </SocialButton>
            <SocialButton
              icon={Mail}
              className="flex-1 bg-white/5 border border-white/10 hover:bg-white/10 text-white/80 hover:text-white text-xs py-2"
            >
              Google
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
              />
              <Input
                label="Last Name"
                name="lastName"
                placeholder="andrews"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            {/* Username */}
            <Input
              label="Username"
              name="username"
              placeholder="sebastianseban"
              value={formData.username}
              onChange={handleChange}
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
            />

            {/* Password Fields */}
            <div className="grid grid-cols-2 gap-2">
              <PasswordInput
                label="Password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
              />
              <PasswordInput
                label="Confirm"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Signing Up..." : "Continue"}
            </Button>

            {/* Error Display */}
            {isError && (
              <p className="text-red-400 text-sm mt-2">
                {error?.response?.data?.message || "Something went wrong"}
              </p>
            )}
          </form>

          {/* Sign In Link */}
          <p className="text-center text-white/60 mt-4 text-xs">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/auth/signin")}
              className="text-[#00D4FF] hover:text-[#00C4EB] font-medium transition-colors duration-300"
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
